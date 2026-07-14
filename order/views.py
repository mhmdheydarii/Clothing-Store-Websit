from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic import TemplateView, FormView
from django.contrib.auth.mixins import LoginRequiredMixin
from .permissions import HasCustomerPermission

from .forms import CheckoutForm
from cart.models import CartModel, CartItemModel
from .models import OrderModel, OrderItemModel
from cart.cart import CartSession
# Create your views here.

class CheckoutView(HasCustomerPermission, LoginRequiredMixin, FormView):
    template_name = "order/order.html"
    form_class = CheckoutForm
    success_url = reverse_lazy("order:success")

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