from django.contrib import admin
from .models import (
    CategoryModel,
    ProductModel, 
    SizeProductModel, 
    ColorProductModel, 
    ImagesProductModel,
    ProductVariant
)
# Register your models here.

@admin.register(CategoryModel)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ["id", "name", "created_date", "updated_date"]
    search_fields = ["name"]

@admin.register(ProductModel)
class ProductAdmin(admin.ModelAdmin):
    list_display = ["id", "name", "price", "discount_percent", "category", "status", "created_date"]
    search_fields = ["name"]
    list_filter = ["category"]

@admin.register(SizeProductModel)
class SizeProductAdmin(admin.ModelAdmin):
    list_display = ["id", "name"]

@admin.register(ColorProductModel)
class ColorProductAdmin(admin.ModelAdmin):
    list_display = ["id", "name", "code"]

@admin.register(ImagesProductModel)
class ImageProductAdmin(admin.ModelAdmin):
    list_display = ["id", "product", "is_main"]

@admin.register(ProductVariant)
class ProductVariantAdmin(admin.ModelAdmin):
    list_display = ["product", "size", "stock", "created_date"]
    search_fields = ["product"]