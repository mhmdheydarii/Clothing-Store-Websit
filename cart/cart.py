from .models import CartModel, CartItemModel
from shop.models import ProductVariant


class CartSession:

    def __init__(self, session):
        self.session = session
        self._cart = self.session.get(
            "cart",
            {
                "items" : []
            }
        )
        self.session["cart"] = self._cart

    def add_product(self, product_id, product_stock):
        
        for item in self._cart["items"]:
            if product_id == item["product_id"]:
                if product_stock > item["quantity"]:
                    item["quantity"] += 1
                    break
                else:
                    return False
        else:
            new_item = {
                "product_id":product_id,
                "quantity":1
            } 
            self._cart["items"].append(new_item)
        self.save()
    

    def update_product_quantity(self, product_id, quantity):
        variant_obj = ProductVariant.objects.get(id=product_id)
        quantity = int(quantity)

        for item in self._cart["items"]:
            if product_id == item["product_id"]:
                if quantity <= variant_obj.stock and quantity > 0:
                    item["quantity"] = quantity
                    break
        else:
            return
        self.save()

    
    def remove_product(self, product_id):
        for item in self._cart["items"]:
            if product_id == item["product_id"]:
                self._cart["items"].remove(item)
                break
        else:
            return
        self.save()

    def get_product_item(self):
        cart_items = self._cart["items"]
        for item in cart_items:
            variant_obj = ProductVariant.objects.get(id=item["product_id"])
            product_image = variant_obj.product.product_images.filter(is_main=True).first()
            item["variant_obj"] = {
                "id":variant_obj.id,
                "product":variant_obj.product.name,
                "color":variant_obj.color.name,
                "size":variant_obj.size.name,
                "stock":variant_obj.stock,
                "image": product_image.image.url,
                "price":int(variant_obj.product.get_price())
            }
            item.update(
                {
                    "variant_obj": item["variant_obj"],
                    "total_price": item["quantity"] * variant_obj.product.get_price()
                }
            )
        return cart_items
    
    def get_total_payment_amount(self):
        return sum(item["total_price"] for item in self._cart["items"])
    
    def get_total_quantity(self):
        return sum(item["quantity"] for item in self._cart["items"])
    
    def save(self):
        self.session.modified = True


    def sync_cart_item_from_db(self, user):
        cart, created = CartModel.objects.get_or_create(user=user)
        cart_items = CartItemModel.objects.filter(cart=cart)

        for cart_item in cart_items:
            for item in self._cart["items"]:
                if str(cart_item.product_variant.id) == item["product_id"]:
                    cart_item.quantity = item["quantity"] 
                    break
            else:
                new_item = {"product_id":str(cart_item.product_variant.id), "quantity":cart_item.quantity}
                self._cart["items"].append(new_item)
        self.merge_session_cart_in_db(user)
        self.save()

    def merge_session_cart_in_db(self, user):
        cart, created = CartModel.objects.get_or_create(user=user)
        
        for item in self._cart["items"]:
            variant_obj = ProductVariant.objects.get(id=item["product_id"], product__status=True)
            cart_item, created = CartItemModel.objects.get_or_create(cart=cart, product_variant=variant_obj)
            cart_item.quantity = item["quantity"]
            cart_item.save()
        session_product_ids = (item["product_id"] for item in self._cart["items"])
        CartItemModel.objects.filter(cart=cart).exclude(product_variant__id__in=session_product_ids).delete()