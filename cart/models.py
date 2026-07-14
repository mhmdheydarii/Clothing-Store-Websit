from django.db import models
from accounts.models import User
from shop.models import ProductModel, ProductVariant

# Create your models here.
class CartModel(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.user.email
    
    def calculate_total_price(self):
        return sum(item.product_variant.product.get_price() * item.quantity for item in self.cart_items.all())
    

class CartItemModel(models.Model):
    cart = models.ForeignKey(CartModel, on_delete=models.CASCADE, related_name="cart_items")
    product_variant = models.ForeignKey(ProductVariant, on_delete=models.SET_NULL, null=True)
    quantity = models.PositiveIntegerField(default=0)

    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.cart} + {self.product_variant.product.name}"
    