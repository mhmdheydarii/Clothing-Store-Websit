from django.urls import path
from . import views

app_name = "order"

urlpatterns = [
    path("chekcout/", views.CheckoutView.as_view(), name="checkout"),
    path("success/", views.SuccessView.as_view(), name="success"),
    path("failed/", views.FailedView.as_view(), name="failed"),
]