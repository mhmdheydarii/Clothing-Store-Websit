from django.urls import path
from . import views

app_name = "accounts"

urlpatterns = [
    path("register/", views.RegisterView.as_view(), name="register"),
    path("login/", views.CustomLoginView.as_view(), name="login"),
    path("logout/", views.CustomLogoutView.as_view(), name="logout"),
    path("password-reset/", views.CustomPasswordResetView.as_view(), name="password-reset"),
    path("password-reset/done/", views.CustomPasswordResetDoneView.as_view(), name="password-reset-done"),
    path("reset/<uidb64>/<token>/", views.CustomPasswordResetConfirmView.as_view(), name="password-reset-confirm"),
]