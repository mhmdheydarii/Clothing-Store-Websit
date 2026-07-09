from django.urls import path
from . import views

app_name = "order"

urlpatterns = [
    path("chekcout/", views.CheckoutView.as_view(), name="checkout")
]