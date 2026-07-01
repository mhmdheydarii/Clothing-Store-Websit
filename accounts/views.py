from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic import CreateView
from django.contrib.messages.views import SuccessMessageMixin

from .models import User, Profile
# Create your views here.

# class RegisterView(SuccessMessageMixin ,CreateView):

#     form_class = RegisterForm
#     template_name = ""
#     success_url = reverse_lazy("")
