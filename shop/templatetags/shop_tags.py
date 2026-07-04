from django import template
from shop.models import ProductModel

register = template.Library()

@register.inclusion_tag("includes/discounted_products.html", takes_context=True)
def show_discounted_products(context):
    request = context.get("request")
    discounted_products = ProductModel.objects.filter(status=True, discount_percent__gte=50)[:4]

    return {"request":request, "discounted_products":discounted_products}
