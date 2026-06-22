import { Component, inject, signal } from '@angular/core';
import { ApiService } from '../../../service/api.service';
import { OrderType } from '../../../models/orderModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-view',
  imports: [CommonModule],
  templateUrl: './order-view.html',
  styleUrl: './order-view.css',
})
export class OrderView {
  apiService = inject(ApiService);
  orderData = signal<OrderType[]>([]);
  ngOnInit() {
    this.getOrder();
  }

  async getOrder() {
    const res = await this.apiService.request<OrderType[]>('GET', 'order/view-all', null, null, {
      showLoader: true,
      useToken: true,
    });
    if (res.status) {
      this.orderData.set(res?.data ?? []);
    }
  }

  async changeOrderStatus(id: string, event: any) {
    console.log(id, event.target.value);

    const res = await this.apiService.request(
      'PUT',
      `order/edit-status/${id}`,
      null,
      { status: event.target.value },
      {
        showLoader: true,
        showToaster: true,
        useToken: true,
      },
    );
    console.log(res);
    if(res.status){
      this.getOrder()
    }
  }
}
