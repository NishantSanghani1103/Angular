import { Component, Input, signal } from '@angular/core';
import { Product } from '../../models/product.model/product.model';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-product-row',
  imports: [],
  templateUrl: './product-row.html',
  styleUrl: './product-row.css',
})
export class ProductRow {
  @Input() pData!: Product;
  constructor(private cart: CartService) {}
  addTOCart() {
    console.log(this.pData);
    const cartObj = {
      id: Number(this.pData.id),
      name: this.pData.name,
      image: this.pData.image,
      price: Number(this.pData.price),
      qty: 1,
    };
    this.cart.addToCart(cartObj);
  }
}
