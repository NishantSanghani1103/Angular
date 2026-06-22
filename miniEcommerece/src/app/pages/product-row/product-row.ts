import { Component, computed, Input, OnInit, signal } from '@angular/core';
import { Product } from '../../models/product.model/product.model';
import { CartService } from '../../service/cart.service';
import { ApiService } from '../../service/api.service';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-product-row',
  imports: [RouterLink, NgClass],
  templateUrl: './product-row.html',
  styleUrl: './product-row.css',
})
export class ProductRow implements OnInit {
  @Input() pData!: Product;
  isInCart = signal(false);

  constructor(
    public cart: CartService,
    private apiService: ApiService,
  ) {}
  checkCart = computed(() =>
    this.cart.cartItems().some((value) => value.productId == this.pData?.id),
  );
  ngOnInit() {
    // this.checkIfInCart();
  }

  // checkIfInCart() {
  //   const checkInCart = this.cart.cartItems().find((value) => value.id === Number(this.pData.id));
  //   if (checkInCart) {
  //     this.isInCart.set(true);
  //   } else {
  //     this.isInCart.set(false);
  //   }
  // }

  // async addToCart() {
  //   const obj = {
  //     productId: this.pData.id,
  //     quantity: 1,
  //     productPrice: this.pData.price,
  //   };
  //   const res = await this.apiService.request('POST', 'cart/add', obj, {
  //     showToaster: true,
  //     useToken: true,
  //   });

  //   console.log(res);

  //   // console.log(this.pData);
  //   // const cartObj = {
  //   //   id: Number(this.pData.id),
  //   //   name: this.pData.name,
  //   //   image: this.pData.imagesUrl[0] ,
  //   //   price: Number(this.pData.price),
  //   //   qty: 1,
  //   // };
  //   // this.cart.addToCart(cartObj);
  //   // this.checkIfInCart();
  // }

  removeFromCart() {
    // this.cart.removeCart(Number(this.pData.id));
    // this.checkIfInCart();
  }
}
