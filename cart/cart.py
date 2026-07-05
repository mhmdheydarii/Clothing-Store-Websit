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
        for item in self._cart["items"]:
            if product_id == item["product_id"]:
                item["quantity"] = int(quantity)
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
            product_obj = ProductVariant.objects.get(id=item["product_id"])
            product_image = product_obj.product.product_images.filter(is_main=True).first()
            item["product_obj"] = {
                "id":product_obj.id,
                "product":product_obj.product.name,
                "color":product_obj.color.code,
                "size":product_obj.size.name,
                "stock":product_obj.stock,
                "image": product_image.image.url,
                "price":int(product_obj.product.get_price())
            }
            item.update(
                {
                    "product_obj": item["product_obj"],
                    "price": item["quantity"] * product_obj.product.get_price()
                }
            )
        return cart_items
    
    def get_total_payment_amount(self):
        return sum(item["total_price"] for item in self._cart["items"])
    
    def get_total_quantity(self):
        return sum(item["quantity"] for item in self._cart["items"])
    
    def save(self):
        self.session.modified = True
