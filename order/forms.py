from django import forms
from .models import AddressModel

class OrderAddressForm(forms.ModelForm):

    class Meta:
        model = AddressModel
        fields =["fullname", "phone_number", "address", "state", "city", "zip_code"]