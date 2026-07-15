from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic import TemplateView, FormView, View
from django.contrib.auth.mixins import LoginRequiredMixin
from .permissions import HasCustomerPermission
from django.utils import timezone
from django.http import JsonResponse
from .forms import CheckoutForm
from cart.models import CartModel, CartItemModel
from .models import OrderModel, OrderItemModel, CouponModel
from cart.cart import CartSession
# Create your views here.

class CheckoutView(HasCustomerPermission, LoginRequiredMixin, FormView):
    template_name = "order/order.html"
    form_class = CheckoutForm
    success_url = reverse_lazy("order:success")

    def get_form_kwargs(self):
        kwargs = super(CheckoutView, self).get_form_kwargs()
        kwargs["request"] = self.request
        return kwargs

    def form_valid(self, form):
        order_obj = form.save(commit=False)
        user = self.request.user
        order_obj.user = user
        order_obj.save()

        cart = CartModel.objects.get(user=user)
        for cart_item in cart.cart_items.all():
            OrderItemModel.objects.create(
            order = order_obj,
            product_variant = cart_item.product_variant,
            quantity = cart_item.quantity,
            price = cart_item.product_variant.product.get_price()
        )
        order_obj.total_price = order_obj.calculate_total_price()
        order_obj.save()
        cart.cart_items.all().delete()
        CartSession(self.request.session).clear()
        return super().form_valid(form)
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        cart = CartModel.objects.get(user=self.request.user)
        total_price = cart.calculate_total_price()
        context["total_price"] = total_price
        return context

class SuccessView(TemplateView):
    template_name = "order/success.html"

class FailedView(TemplateView):
    template_name = "order/failed.html"


class ValidateCouponView(HasCustomerPermission, LoginRequiredMixin, View):

    def post(self, request, *args, **kwargs):
        code = request.POST.get("coupon")
        user = request.user

        status_code = 200
        message = "کد تخفیف با موفقیت اعمال شد"
        total_price = 0

        try:
            coupon = CouponModel.objects.get(code=code)
        except CouponModel.DoesNotExist:
            return JsonResponse({"کد تخفیف وجود ندارد"}, status=404)
        
        else:
            if coupon.used_by.count() >= coupon.max_limit_usage:
                status_code, message = 403, "کد تخفیف به اتمام رسیده است"
            
            if coupon.expiered_date and coupon.expiered_date <= timezone.now():
                status_code, message = 403, "کد تخفیف منقضی شده است"
            
            if user in  coupon.used_by.exists():
                status_code, message = 403, "کد تخفیف توسط شما استفاده شده است"
            
            else:
                cart = CartModel.objects.get(user=self.request.user)
                total_price = cart.calcolate_total_price()
                total_price = total_price - round( total_price * (coupon.discount_percent / 100))

        return JsonResponse(
            {
                "message": message,
                "total_price": total_price,
            },
            status=status_code,
        )
