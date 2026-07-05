from django.urls import path
from . import views


app_name = "cart"

urlpatterns = [
    path("add-product/", views.AddProductView.as_view(), name="add-product"),
    path("update-product/", views.UpdateProductQuantityView.as_view(), name="update-product"),
    path("remove-product/", views.RemoveProductView.as_view(), name="remove-product"),
    path("products/cart/list/", views.CartSummaryView.as_view(), name="cart_summary"),
]