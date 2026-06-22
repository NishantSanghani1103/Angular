import { Component, computed, effect, signal } from '@angular/core';
import { CartService } from '../../service/cart.service';
// import { CartItemType } from '../../models/cartType';
import { CartRow } from '../cart-row/cart-row';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { CartItemType } from '../../models/cartType';

@Component({
  selector: 'app-cart',
  imports: [RouterLink, CartRow,RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  cartData = signal<CartItemType[]>([]);
  total = computed(() =>
    this.cart.cartItems().reduce((acc, cuu) => acc + cuu.quantity * Number(cuu.productPrice), 0),
  );
  constructor(
    public cart: CartService,
    private apiService: ApiService,
  ) {}
  async ngOnInit() {
    this.cart.viewCart();
  }
}
