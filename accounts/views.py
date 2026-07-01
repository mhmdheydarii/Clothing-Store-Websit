from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic import CreateView
from django.contrib.messages.views import SuccessMessageMixin
from django.contrib.auth import login
from django.contrib.auth.views import LoginView ,LogoutView, PasswordResetView, PasswordResetDoneView, PasswordResetConfirmView
from .forms import RegisterForm, CustomLoginForm
from .models import User, Profile

# Create your views here.

class RegisterView(SuccessMessageMixin ,CreateView):

    form_class = RegisterForm
    template_name = "accounts/register.html"
    success_url = reverse_lazy("website:index")
    success_message = "حساب کاربری با موفقیت ایجاد شد"

    def form_valid(self, form):
        response = super().form_valid(form)
        login(self.request, self.object)
        return response


class CustomLoginView(LoginView):
    template_name = "accounts/login.html"
    form_class = CustomLoginForm


class CustomLogoutView(LogoutView):
    template_name = "website/index.html"


class CustomPasswordResetView(PasswordResetView):
    template_name = "accounts/password-reset.html"
    success_url = reverse_lazy("accounts:password-reset-done")

class CustomPasswordResetDoneView(PasswordResetDoneView):
    template_name = "accounts/password-reset-done.html"

class CustomPasswordResetConfirmView(PasswordResetConfirmView):
    template_name = "accounts/password-reset-confirm.html"
    success_url = reverse_lazy("website:index")