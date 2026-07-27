from django.db import models

# Create your models here.

class BlogModel(models.Model):
    title = models.CharField(max_length=255)
    brief_description = models.CharField(max_length=500)
    description = models.TextField()
    image = models.ImageField(upload_to="blog/images")
    tag = models.CharField(max_length=255)
    class BlogStatusType(models.TextChoices):
        PENDING = "pending", "در انتظار"
        PUBLISHED = "published", "منتشر شده"
        REJECTED = "rejected", "رد شده"

    status = models.CharField(max_length=255, choices=BlogStatusType.choices, default=BlogStatusType.PENDING)
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ["-created_date"]    
