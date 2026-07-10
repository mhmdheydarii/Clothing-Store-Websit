from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.utils import timezone
from accounts.models import User
from shop.models import ProductVariant
from accounts.validators import validate_iranian_cellphone_number

# Create your models here.

class CouponModel(models.Model):
    code = models.CharField(max_length=255)
    discount_percent = models.IntegerField(default=0, validators=[MinValueValidator(0), MaxValueValidator(100)])
    max_limit_user = models.PositiveIntegerField(default=0)
    used_by = models.ManyToManyField(User, related_name="coupon_users", null=True, blank=True)

    expiered_date = models.DateTimeField(default=timezone.now())
    updated_date = models.DateTimeField(auto_now=True)
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.code
    
    class Meta:
        ordering = ["-created_date"]


class OrderModel(models.Model):

    class OrderStatusTypeModel(models.TextChoices):
        PENDING = "pending", "در انتظار"
        PAID = "paid", "پرداخت شده"
        CANCELED = "canceled", "لغو شده"

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="orders")

    fullname = models.CharField(max_length=255, null=True, blank=True)
    phone_number = models.CharField(max_length=12, validators=[validate_iranian_cellphone_number] ,null=True, blank=True)
    address = models.TextField()
    state = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    zip_code = models.CharField(max_length=50)

    total_price = models.DecimalField(default=0, max_digits=10, decimal_places=0)
    coupon = models.ForeignKey(CouponModel, on_delete=models.PROTECT, null=True, blank=True)
    
    status = models.CharField(max_length=50, choices=OrderStatusTypeModel.choices, default=OrderStatusTypeModel.PENDING)
    updated_date = models.DateTimeField(auto_now=True)
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.email
    
    def calculate_total_price(self):
        return sum(item.price * item.quantity for item in self.order_items.all())

    class Meta:
        ordering = ["-created_date"]
    


class OrderItemModel(models.Model):
    order = models.ForeignKey(OrderModel, on_delete=models.CASCADE, related_name="order_items")
    product_variant = models.ForeignKey(ProductVariant, on_delete=models.SET_NULL, null=True)
    quantity = models.PositiveIntegerField(default=0)
    price = models.DecimalField(default=0, max_digits=10, decimal_places=0)

    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.product_variant.product.name

    class Meta:
        ordering = ["-created_date"]



