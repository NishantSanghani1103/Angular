import { Component, inject, signal } from '@angular/core';
import { ApiService } from '../../../service/api.service';
import { OrderType, Product } from '../../../models/orderModel';

interface countItemsType {
  productCount: number | null;
  orderCount: number | null;
  customerRes: number | null;
}

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  apiService = inject(ApiService);
  countItems = signal<countItemsType>({
    productCount: null,
    orderCount: null,
    customerRes: null,
  });

  ngOnInit() {
    this.getApis();
  }
  async getApis() {
    const productRes = await this.apiService.request<Product[]>('GET', 'product/view', null, null, {
      showLoader: true,
    });

    const orderRes = await this.apiService.request<OrderType[]>(
      'GET',
      'order/view-all',
      null,
      null,
      {
        showLoader: true,
        useToken: true,
      },
    );

    const userRes = await this.apiService.request<any>('GET', 'user/view', null, null, {
      showLoader: true,
      useToken: true,
    });
    this.countItems.update((value) => ({
      ...value,
      productCount: productRes['count'] ?? null,
      orderCount: orderRes.data?.length ?? null,
      customerRes: userRes.data?.length ?? null,
    }));
  }
}
