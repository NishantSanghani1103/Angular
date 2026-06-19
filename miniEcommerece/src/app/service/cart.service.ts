import { computed, effect, Injectable, signal } from '@angular/core';

// import { AddToCartData, CartItem } from '../models/cartType';

import { ToastrService } from 'ngx-toastr';

import { ApiService } from './api.service';

import { Product } from '../models/product.model/product.model';

import { CartItemType } from '../models/cartType';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems = signal<CartItemType[]>([]);

  constructor(
    private toast: ToastrService,
    private apiService: ApiService,
  ) {}
  async addToCart(product: any) {
    console.log(product);
    const obj = {
      productId: product.id,
      quantity: 1,
      productPrice: product.price,
    };
    const res = await this.apiService.request<any>('POST', 'cart/add', obj, null, {
      showToaster: true,
      useToken: true,
      showLoader:true
    });
    console.log(res.data.createCartItems);
    this.cartItems.update((value) => [...value, res.data.createCartItems]);
  }
  async viewCart() {
    const res = await this.apiService.request<CartItemType[]>('GET', 'cart/view', null, null, {
      showLoader: true,
      useToken: true,
      showToaster: false,
    });
    this.cartItems.set(res.data ?? []);
  }
}
