from django.shortcuts import render
from django.views.generic import TemplateView, ListView, DetailView

from .models import BlogModel

# Create your views here.

class BlogPostsListView(ListView):
    template_name = "blog/blog.html"
    queryset = BlogModel.objects.filter(status=BlogModel.BlogStatusType.PUBLISHED)
    paginate_by = 9
    

class BlogPostDetailView(DetailView):
    template_name = "blog/blog-post.html"
    queryset = BlogModel.objects.filter(status=BlogModel.BlogStatusType.PUBLISHED)