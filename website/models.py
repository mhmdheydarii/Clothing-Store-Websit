from django.db import models

# Create your models here.

class ContactModel(models.Model):
    fullname = models.CharField(max_length=255)
    email = models.EmailField()
    message = models.TextField()

    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
    class Meta:
        ordering = ["-created_at"]

class NewsLetterModel(models.Model):
    email = models.EmailField(unique=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email
    
    class Meta:
        ordering = ["-created_at"]