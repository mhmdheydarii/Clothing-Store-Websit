from django import forms
from accounts.models import Profile


class CustomerProfileForm(forms.ModelForm):

    class Meta:
        model = Profile
        fields = ["fullname", "phone_number"]