from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views import View
from accounts.models import UserType
# Create your views here.

class DashboardView(LoginRequiredMixin, View):

    def dispatch(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            if request.user.type == UserType.admin.value:
                return redirect(reverse_lazy("dashboard:admin:home"))
            if request.user.type == UserType.customer.value:
                return redirect(reverse_lazy("dashboard:customer:home"))
        else:
            return redirect(reverse_lazy("accounts:login"))
        return super().dispatch(request, *args, **kwargs)