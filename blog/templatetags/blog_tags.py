from django import template
from blog.models import BlogModel

register = template.Library()


@register.inclusion_tag("includes/similar_posts.html", takes_context=True)
def show_similar_posts(context, post):
    request = context.get("request")
    similar_posts = BlogModel.objects.filter(status=BlogModel.BlogStatusType.PUBLISHED).exclude(id=post.id)[:4]
    return {"request":request, "similar_posts":similar_posts}