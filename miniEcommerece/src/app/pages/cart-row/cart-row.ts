import { Component, Input } from '@angular/core';
// import { CartItemType } from '../../models/cartType';
import { CartService } from '../../service/cart.service';
import { CartItemType } from '../../models/cartType';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-cart-row',
  imports: [],
  templateUrl: './cart-row.html',
  styleUrl: './cart-row.css',
})
export class CartRow {
  @Input() item!: CartItemType;

  constructor(
    public cart: CartService,
    private apiService: ApiService,
    private carService: CartService,
  ) {}
  async changeCartQty(id: string, quantity: number) {
    console.log(id, quantity);

    await this.apiService.request('PUT', `cart/update-qty/${id}`, { quantity }, null, {
      useToken: true,
      showLoader: true,
      showToaster: true,
    });
    // console.log(res);
    this.carService.viewCart();
  } 

  async removeFromCart(id: string) {
    if (confirm('Are You Want To Remove Item From Cart ? ')) {
      const res = await this.apiService.request('DELETE', `cart/delete/${id}`, null, null, {
        showLoader: true,
        useToken: true,
        showToaster: true,
      });
      console.log(res);
      this.carService.viewCart();
    }
  }
}
