from django.shortcuts import render, redirect
from django.views.generic import TemplateView, FormView
from django.urls import reverse_lazy
from django.contrib import messages
from .forms import ContactForm, NewsLetterForm

# Create your views here.

class IndexView(TemplateView):
    template_name = "website/index.html"

class AboutView(TemplateView):
    template_name = "website/about.html"

class ContactView(FormView):
    template_name = "website/contact.html"
    form_class = ContactForm
    success_url = reverse_lazy("website:contact")

    def form_valid(self, form):
        form.save()
        messages.success(self.request, "تیکت شما با موفقیت ارسال شد")
        return super().form_valid(form)
    
    def form_invalid(self, form):
        messages.error(self.request, "خطایی در ارسال تیکت بوجود امد. مجددا تلاش کنید")
        return redirect(self.request.META.get("HTTP_REFERER"))
    
class NewsLetterView(FormView):
    http_method_names = ["post"]
    template_name = "website/index.html"
    form_class = NewsLetterForm
    success_url = reverse_lazy("website:index")

    def form_valid(self, form):
        form.save()
        messages.success(self.request, "خبرنامه ها به ایمیل شما ارسال خواهند شد")
        return super().form_valid(form)
    
    def form_invalid(self, form):
        messages.error(self.request, "مشکلی بوجود امد مجددا تلاش کنید")
        return redirect(self.request.META.get("HTTP_REFERER"))