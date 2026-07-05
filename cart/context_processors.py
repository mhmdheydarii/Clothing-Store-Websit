from .models import CartModel

def cart_products(request):
    cart = CartModel(request.session)
    return {"cart":cart}