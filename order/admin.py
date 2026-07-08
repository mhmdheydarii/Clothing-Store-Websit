from django.contrib import admin
from .models import (
    CouponModel,
    AddressModel,
    OrderModel,
    OrderItemModel
)

# Register your models here.

@admin.register(CouponModel)
class CouponAdmin(admin.ModelAdmin):
    list_display = [
        "code",
        "discount_percent", 
        "max_limit_user", 
        "expiered_date", 
        "created_date"
        ]
    search_fields = ["code"]
    list_filter = ["discount_percent"]

@admin.register(AddressModel)
class AddressAdmin(admin.ModelAdmin):
    list_display = [
        "user",
        "state", 
        "city", 
        "zip_code", 
        "created_date"
        ]
    list_filter = ["state"]
    search_fields = ["city"]

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

