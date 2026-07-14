from django.contrib import admin
from .models import (
    CouponModel,
    OrderModel,
    OrderItemModel
)

# Register your models here.

@admin.register(CouponModel)
class CouponAdmin(admin.ModelAdmin):
    list_display = [
        "code",
        "discount_percent", 
        "max_limit_usage", 
        "expiered_date", 
        "created_date"
        ]
    search_fields = ["code"]
    list_filter = ["discount_percent"]

@admin.register(OrderModel)
class OrderAdmin(admin.ModelAdmin):
    list_display = [
        "user", 
        "total_price", 
        "coupon", 
        "status", 
        "created_date"
        ]
    search_fields = ["user"]
    list_filter = ["coupon"]

@admin.register(OrderItemModel)
class OrderItemAdmin(admin.ModelAdmin):
    list_display = [
        "order",
        "product_variant",
        "quantity",
        "created_date",
    ]

