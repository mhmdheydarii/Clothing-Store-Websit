from django.shortcuts import render, get_object_or_404
from django.views.generic import View
from django.db import transaction
from .models import PaymentModel
from order.models import OrderModel
from .zarinpal import ZarinPalSandbox
from shop.models import ProductVariant
from cart.models import CartModel
from cart.cart import CartSession
# Create your views here.


class PaymentVerifyView(View):

    def get(self, request, *args, **kwargs):
        authority_id = request.GET.get("Authority")
        payment_obj = get_object_or_404(PaymentModel, authority_id=authority_id)
        order = OrderModel.objects.get(payment=payment_obj)
        zarinpal = ZarinPalSandbox()
        response = zarinpal.payment_verify(int(payment_obj.amount), authority_id)

        data = response.get("data",{})

        if data.get("code") in [100, 101]:

            if payment_obj.status == payment_obj.PaymentStatusType.PAID:
                return render(request, "order/success.html")
            
            with transaction.atomic():

                for item in order.order_items.all():

                    product = ProductVariant.objects.select_for_update().get(
                        id=item.product_variant.id
                    )

                    if product.stock < item.quantity:
                        return render(request, "order/failed.html")

                    product.stock -= item.quantity
                    product.save()

            payment_obj.ref_id = data.get("ref_id")
            payment_obj.response_code = data.get("code")
            payment_obj.status = payment_obj.PaymentStatusType.PAID
            payment_obj.response_json = response
            payment_obj.save()

            order.status = order.OrderStatusTypeModel.PAID
            order.save()
            cart = CartModel.objects.get(user=order.user)
            cart.cart_items.all().delete()
            CartSession(request.session).clear()
            return render(request, "order/success.html")
        else:
            payment_obj.ref_id = data.get("ref_id")
            payment_obj.response_code = data.get("code")
            payment_obj.status = payment_obj.PaymentStatusType.CANCELED
            payment_obj.response_json = response
            payment_obj.save()

            order.status = order.OrderStatusTypeModel.CANCELED
            order.save()

            return render(request, "order/failed.html")

        