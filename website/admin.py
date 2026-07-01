from django.contrib import admin
from .models import ContactModel, NewsLetterModel
# Register your models here.

@admin.register(ContactModel)
class ContactAdmin(admin.ModelAdmin):
    list_display = ["fullname", "is_read", "created_at"]
    search_fields = ["fullname"]

@admin.register(NewsLetterModel)
class NewsLetter(admin.ModelAdmin):
    list_display = ["email", "created_at"]
    search_fields = ["email"]
    