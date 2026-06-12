import { computed, Injectable, signal } from '@angular/core';
import { CartItemType } from '../models/cartType';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems = signal<CartItemType[]>(JSON.parse(localStorage.getItem('CART') ?? '[]'));
  totalPrice = computed(() => this.cartItems().reduce((acc, cuu) => acc + cuu.price * cuu.qty, 0));

  constructor(private toast: ToastrService) {}

  addToCart(product: CartItemType) {
    console.log(product);
    const checkProduct = this.cartItems().find((value, index) => value.id == product.id);
    if (checkProduct) {
      this.toast.error('Product Already Exists In Cart...!!');
    } else {
      this.cartItems.update((value) => [...value, product]);
      this.toast.success('Product Added In Cart....!!');
    }
    localStorage.setItem('CART', JSON.stringify(this.cartItems()));
  }

  removeCart(id: number) {
    if (confirm('Are You Want To Sure To Remove Item ? ')) {
      this.cartItems.update((value) => value.filter((val, ind) => val.id != id));
      this.toast.success('Product Removed From The Cart...!!');
      localStorage.setItem('CART', JSON.stringify(this.cartItems()));
    }
  }

  changeQty(id: number, type: string, qty: number) {
    if (type === 'increment') {
      qty < 10 &&
        this.cartItems.update((value) =>
          value.map((items, ind) => (items.id == id ? { ...items, qty: items.qty + 1 } : items)),
        );
    } else {
      qty > 1 &&
        this.cartItems.update((value) =>
          value.map((items, ind) => (items.id == id ? { ...items, qty: items.qty - 1 } : items)),
        );
    }
    localStorage.setItem('CART', JSON.stringify(this.cartItems()));
  }
}
