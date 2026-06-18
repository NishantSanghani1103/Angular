import { Component, effect, inject, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { apiRequest } from './utils/api.util';
import { Product, productApiResType } from '../types/productApiType';
import { ApiService } from './service/api.service';
import { CategoriesResponse, Category } from '../types/categoryApiType';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('APi-types');
  http = inject(HttpClient);
  productData = signal<Product[]>([]);
  categoryData = signal<Category[]>([]);
  message = signal('');
  constructor(private apiService: ApiService) {
    effect(() => {
      console.log(this.productData());
      // console.log(this.message());
      console.log(this.categoryData());
    });
  }
  ngOnInit() {
    // this.getProduct(); // using asnyc /  await
    // this.getProduct()     //  using promises.
    //   .then((res) => {
    //     this.productData.set(res.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    this.getProduct().then((res) => {
      console.log(res.data);
      this.productData.set(res.data ?? []);
    });
    this.getCategory();
  }

  // async getProduct() {
  //   try {
  //     const res = await apiRequest(this.http, 'products.php');
  //     // console.log(res);
  //     this.productData.set(res.data);
  //   } catch (error) {
  //     // console.log(error);
  //   }
  // }
  // getProduct(): Promise<productApiResType> {
  //   return apiRequest(this.http, 'products.php');
  // }

  // getProduct() {
  //   return apiRequest(this.http, 'products.php');
  // }

  async getCategory() {
    try {
      const res = await this.apiService.request<Category[]>('GET', 'categories.php');
      this.categoryData.set(res.data ?? []);
      this.message.set(res.message);
    } catch (error) {}
  }

  getProduct() {
    return this.apiService.request<Product[]>('GET', 'products.php');
  }
}
