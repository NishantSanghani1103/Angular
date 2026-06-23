import { Component, effect, inject, signal } from '@angular/core';
import { ApiService } from '../../../service/api.service';
import { Product } from '../../../models/product.model/product.model';
import { ProductRows } from '../product-rows/product-rows';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-product-view',
  imports: [ProductRows, RouterLink, MatPaginatorModule],
  templateUrl: './product-view.html',
  styleUrl: './product-view.css',
})
export class ProductView {
  apiService = inject(ApiService);
  productData = signal<Product[]>([]);
  currentPage = 1;
  pageSize = 4;
  totalRecords = signal<number>(0);
  constructor() {
    effect(() => {
      console.log(this.productData());
    });
  }
  ngOnInit() {
    this.getProduct();
  }

  async getProduct() {
    const res = await this.apiService.request<Product[]>(
      'GET',
      'product/view',
      null,
      {
        skip: this.currentPage ?? 1,
        limit: this.pageSize,
      },
      {
        showLoader: true,
      },
    );
    console.log(res);
    this.productData.set(res.data ?? []);
    this.totalRecords.set(res['count']);
  }

  async deleteProduct(id: string) {
    alert(id);
  }

  onPageChange(event: any) {
    console.log(event);
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.getProduct();
  }
}
