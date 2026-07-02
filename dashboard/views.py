from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views import View
from accounts.models import UserType
# Create your views here.

class DashboardView(LoginRequiredMixin, View):

    def dispatch(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            if request.user.type in (UserType.admin.value, UserType.superuser.value):
                return redirect(reverse_lazy("dashboard:admin:profile"))
            if request.user.type == UserType.customer.value:
                return redirect(reverse_lazy("dashboard:customer:profile"))
        return super().dispatch(request, *args, **kwargs)