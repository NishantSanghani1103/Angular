import { Component, Input } from '@angular/core';
import { CartItemType } from '../../models/cartType';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart-row',
  imports: [],
  templateUrl: './cart-row.html',
  styleUrl: './cart-row.css',
})
export class CartRow {
  @Input() item!: CartItemType;

  constructor(public cart:CartService){}
}
