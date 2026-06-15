import { Component, Input, OnInit, signal } from '@angular/core';
import { Product } from '../../models/product.model/product.model';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-product-row',
  imports: [],
  templateUrl: './product-row.html',
  styleUrl: './product-row.css',
})
export class ProductRow implements OnInit {
  @Input() pData!: Product;
  isInCart = signal(false);

  constructor(private cart: CartService) {}

  ngOnInit() {
    this.checkIfInCart();
  }

  checkIfInCart() {
    const checkInCart = this.cart
      .cartItems()
      .find((value) => value.id === Number(this.pData.id));
    if (checkInCart) {
      this.isInCart.set(true);
    } else {
      this.isInCart.set(false);
    }
  }

  addToCart() {
    console.log(this.pData);
    const cartObj = {
      id: Number(this.pData.id),
      name: this.pData.name,
      image: this.pData.image,
      price: Number(this.pData.price),
      qty: 1,
    };
    this.cart.addToCart(cartObj);
    this.checkIfInCart();
  }

  removeFromCart() {
    this.cart.removeCart(Number(this.pData.id));
    this.checkIfInCart();
  }
}
