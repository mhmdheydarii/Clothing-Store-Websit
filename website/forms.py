from django import forms
from .models import ContactModel, NewsLetterModel


class ContactForm(forms.ModelForm):

    class Meta:
        model = ContactModel
        fields = ["fullname", "email", "message"]

    error_messages = {
        "email": {"required": "فیلد ایمیل نمی تواند خالی باشد"},
        "message": {
            "required": "فیلد محتوا نمی تواند خالی باشد",
            "min_length": "طول محتوای وارد شده غیر مجاز است",
        },
        "fullname": {"required": "فیلد نام و نام خانوادگی نمی تواند خالی باشد"},
    }

class NewsLetterForm(forms.ModelForm):

    class Meta:
        model = NewsLetterModel
        fields = ["email"]
