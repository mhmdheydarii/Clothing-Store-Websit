from django.shortcuts import render
from django.views.generic import ListView
from django.core.exceptions import FieldError
from .models import ProductModel, ProductVariant, CategoryModel

# Create your views here.

class ProductsView(ListView):
    template_name = "shop/products.html"
    paginate_by = 9

    def get_queryset(self):
        queryset = ProductModel.objects.filter(status=True)
        if category := self.request.GET.get("category"):
            queryset = queryset.filter(category__name=category)
        if sort := self.request.GET.get("sort"):
            try:
                queryset = queryset.order_by(sort)
            except FieldError:
                pass
        return queryset

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["products_variant"] = ProductVariant.objects.all()
        context["categories"] = CategoryModel.objects.all()
        return context