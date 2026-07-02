from django.urls import path, include
from . import views

app_name = "dashboard"

urlpatterns = [
    path("home/", views.DashboardView.as_view(), name="home"),

    path("admin/", include("admin.urls")),
    path("customer/", include("customer.urls"))
]