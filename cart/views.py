from django.shortcuts import render
from django.views.generic import View
from django.http import JsonResponse
from .cart import CartSession
from .models import CartItemModel
from shop.models import ProductVariant

# Create your views here.

class AddProductView(View):

    def post(self, request, *args, **kwargs):
        cart = CartSession(request.session)
        product_id = request.POST.get("product_id")
        product = ProductVariant.objects.get(id=product_id)
        product_stock = product.stock
        if product_id and product_stock:
            cart.add_product(product_id, product_stock)
        return JsonResponse({"total_quantity": cart.get_total_quantity()})