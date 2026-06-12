import { Component, signal } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { CartItemType } from '../../models/cartType';
import { CartRow } from '../cart-row/cart-row';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [RouterLink,CartRow],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  constructor(public cart: CartService) {}

}
