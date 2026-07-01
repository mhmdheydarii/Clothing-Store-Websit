from django import forms
from django.contrib.auth.forms import AuthenticationForm, UsernameField
from django.core.exceptions import ValidationError
from .models import User


class RegisterForm(forms.ModelForm):

    password1 = forms.CharField(max_length=50, required=True)
    password2 = forms.CharField(max_length=50, required=True)
    fullname = forms.CharField(max_length=255)

    class Meta:
        model = User
        fields = ["fullname" ,"email", "password1", "password2"]

    def clean_email(self, *args, **kwargs):
        email = self.cleaned_data.get("email")

        if User.objects.filter(email=email).exists():
            raise forms.ValidationError("ایمیل درحال حاضر وجود دارد")
        return email
    
    def clean(self, *args, **kwargs):
        cleaned_data = super().clean()
        password1 = cleaned_data.get("password1")
        password2 = cleaned_data.get("password2")

        if password1 and password2 and password1 != password2:
            raise forms.ValidationError("رمز عبور یکسان نیست")
        return cleaned_data
    
    def save(self, commit=True):
        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        user.fullname = self.cleaned_data["fullname"]

        if commit:
            user.save()
            user.user_profile.fullname = self.cleaned_data["fullname"]
            user.user_profile.save()
        return user

        
class CustomLoginForm(AuthenticationForm):

    username = UsernameField(widget=forms.TextInput(attrs={"autofocus": True}), error_messages={
            "required": "لطفاً ایمیل خود را وارد کنید."
        })
    password = forms.CharField(
        label=("Password"),
        strip=False,
        widget=forms.PasswordInput(attrs={"autocomplete": "current-password"}),
        error_messages={
            "required": "لطفاً رمز عبور خود را وارد کنید."
        }
    )

    def confirm_login_allowed(self, user):
        super(CustomLoginForm, self).confirm_login_allowed(user)

        if not user.is_active:
            raise ValidationError("user is not active")
        
    error_messages = {
        "invalid_login": (
            "ایمیل یا رمز عبور اشتباه است لطفا به درستی وارد  کنید"
        ),
        "inactive": ("حساب کاربری مسدود شده است"),
    }