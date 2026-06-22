import { Component, effect, inject, signal } from '@angular/core';
import { ApiService } from '../../../service/api.service';
import { Product } from '../../../models/product.model/product.model';
import { ProductRows } from '../product-rows/product-rows';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-product-view',
  imports: [ProductRows,RouterLink],
  templateUrl: './product-view.html',
  styleUrl: './product-view.css',
})
export class ProductView {
  apiService = inject(ApiService);
  productData = signal<Product[]>([]);

  constructor() {
    effect(() => {
      console.log(this.productData());
    });
  }
  ngOnInit() {
    this.getProduct();
  }

  async getProduct() {
    const res = await this.apiService.request<Product[]>('GET', 'product/view', null, null, {
      showLoader: true,
    });
    console.log(res);
    this.productData.set(res.data ?? []);
  }

  async deleteProduct(id: string) {
    alert(id);
  }
}
