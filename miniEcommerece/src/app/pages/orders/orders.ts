import { Component, signal } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { CommonModule, NgClass } from '@angular/common';
import { OrderType } from '../../models/orderModel';

@Component({
  selector: 'app-orders',
  imports: [CommonModule,NgClass],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders {
  constructor(private apiService: ApiService) {}
  orderData = signal<OrderType[]>([]);
  ngOnInit() {
    this.getOrder();
  }
  async getOrder() {
    const res = await this.apiService.request<OrderType[]>('GET', 'order/view', null, null, {
      showLoader: true,
      useToken: true,
    });
    console.log(res);
    this.orderData.set(res?.data ?? []);
  }
}
