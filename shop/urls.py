from django.urls import path
from . import views

app_name = "shop"

urlpatterns = [
    path("products/", views.ProductsView.as_view(), name="products")
]