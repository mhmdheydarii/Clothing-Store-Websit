from django.contrib.auth.mixins import UserPassesTestMixin
from accounts.models import UserType


class UserAdminPermission(UserPassesTestMixin):
    
    def test_func(self):
        if self.request.user.is_authenticated:
            return self.request.user.type == UserType.admin.value or UserType.superuser.value
        
class UserCustomerPermission(UserPassesTestMixin):

    def test_func(self):
        if self.request.user.is_authenticated:

            return self.request.user.type == UserType.customer.value