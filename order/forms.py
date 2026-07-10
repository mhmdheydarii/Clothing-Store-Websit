from django import forms
from .models import OrderModel

class OrderForm(forms.ModelForm):

    class Meta:
        model = OrderModel
        fields =["fullname", "phone_number", "address", "state", "city", "zip_code"]