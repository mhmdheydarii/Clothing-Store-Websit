from django.urls import path, re_path
from . import views

app_name = "blog"

urlpatterns = [
    path("post/list/", views.BlogPostsListView.as_view(), name="post-list"),
    re_path(r'post/(?P<slug>[-\w]*)/detail/', views.BlogPostDetailView.as_view(), name="post-detail")
]