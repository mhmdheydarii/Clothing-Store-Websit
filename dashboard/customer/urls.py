from django.urls import path
from . import views

app_name = "customer"

urlpatterns = [
    path("profile/", views.CustomerProfileView.as_view(), name="profile"),
    path("address/", views.CustomerAddressView.as_view(), name="address"),
    path("order/", views.CustomerOrderView.as_view(), name="order"),
]