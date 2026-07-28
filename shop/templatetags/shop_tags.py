from django import template
from shop.models import ProductModel

register = template.Library()

@register.inclusion_tag("includes/shop/discounted_products.html", takes_context=True)
def show_discounted_products(context):
    request = context.get("request")
    discounted_products = ProductModel.objects.filter(status=True, discount_percent__gte=50)[:4]

    return {"request":request, "discounted_products":discounted_products}


@register.inclusion_tag("includes/shop/similar_products.html", takes_context=True)
def show_similar_products(context, product):
    request = context.get("request")
    similar_products = ProductModel.objects.filter(status=True, category__name=product.category).exclude(id=product.id)[:4]
    return {"request":request, "similar_products":similar_products}