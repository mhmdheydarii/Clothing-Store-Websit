from django import forms
from django.utils import timezone
from .models import OrderModel, CouponModel

class CheckoutForm(forms.ModelForm):
    coupon = forms.CharField(required=False)

    class Meta:
        model = OrderModel
        fields =["fullname", "phone_number", "address", "state", "city", "zip_code"]

    def __init__(self, *args, **kwargs):
        self.request = kwargs.pop("request", None)
        super(CheckoutForm, self).__init__(*args, **kwargs)

    def clean_coupon(self):
        code = self.cleaned_data.get("coupon")
        if code == "":
            return None
        user = self.request.user
        coupon = None

        try:
            coupon = CouponModel.objects.get(code=code)
        except CouponModel.DoesNotExist:
            raise forms.ValidationError("کد تخفیف وجود ندارد")
        
        if coupon:

            if coupon.used_by.count() >= coupon.max_limit_usage:
                raise forms.ValidationError("کد تخفیف به اتمام رسیده است")
            
            if coupon.expiered_date <= timezone.now():
                raise forms.ValidationError("کد تخفیف منقضی شده است")
            
            if user in coupon.used_by:
                raise forms.ValidationError("این کد تخفیف توسط شما استفاده شده است")
        
        return coupon