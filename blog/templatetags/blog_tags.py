from django import template
from blog.models import BlogModel

register = template.Library()


@register.inclusion_tag("includes/blog/similar_posts.html", takes_context=True)
def show_similar_posts(context, post):
    request = context.get("request")
    similar_posts = BlogModel.objects.filter(status=BlogModel.BlogStatusType.PUBLISHED).exclude(id=post.id)[:3]
    return {"request":request, "similar_posts":similar_posts}

@register.inclusion_tag("includes/blog/latest_posts.html", takes_context=True)
def show_latest_posts(context):
    request = context.get("request")
    latest_posts = BlogModel.objects.filter(status=BlogModel.BlogStatusType.PUBLISHED)[:3]

    return {"request":request, "latest_posts":latest_posts}