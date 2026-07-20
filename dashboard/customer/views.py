from django.views.generic import TemplateView, FormView, UpdateView, ListView
from dashboard.permissions import UserCustomerPermission
from django.urls import reverse_lazy
from django.contrib import messages
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.messages.views import SuccessMessageMixin
from .forms import CustomerProfileForm
from accounts.models import Profile
from order.models import OrderModel

class CustomerProfileView(UserCustomerPermission, LoginRequiredMixin, SuccessMessageMixin ,UpdateView):
    form_class = CustomerProfileForm
    template_name = "dashboard/customer/profile.html"
    success_message = "اطلاعات شما با موفقیت بروزرسانی شد."
    success_url = reverse_lazy("dashboard:customer:profile")

    def get_object(self, queryset=None):
        return Profile.objects.get(user=self.request.user)
    
    def form_invalid(self, form):
        messages.error(self.request, "مشکلی در بروزرسانی اطلاعات بوجود آمد.")
        return super().form_invalid(form)


class CustomerOrderView(UserCustomerPermission, LoginRequiredMixin, ListView):
    template_name = "dashboard/customer/order.html"
    
    queryset = OrderModel.objects.filter(status=OrderModel.OrderStatusTypeModel.PAID)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["orders"] = OrderModel.objects.filter(status=OrderModel.OrderStatusTypeModel.PAID)
        return context
