from django.shortcuts import render
from django.views.generic import TemplateView, ListView

from .models import BlogModel

# Create your views here.

class BlogPostsListView(ListView):

    template_name = "blog/blog.html"
    queryset = BlogModel.objects.filter(status=BlogModel.BlogStatusType.PUBLISHED)
    