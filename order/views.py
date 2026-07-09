from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic import TemplateView, FormView
from .forms import OrderAddressForm
# Create your views here.

class CheckoutView(FormView):
    template_name = "order/order.html"
    form_class = OrderAddressForm
    success_url = reverse_lazy("order:success")

    def form_valid(self, form):
        address = form.save(commit=False)
        address.user = self.request.user
        address.save()
        return super().form_valid(form)
    

class SuccessView(TemplateView):
    template_name = "order/success.html"

class FailedView(TemplateView):
    template_name = "order/failed.html"