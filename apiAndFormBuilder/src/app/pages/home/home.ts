import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { environment } from '../../../environment/environment';
import { NgClass } from '@angular/common';

import { Product } from '../product/product';


@Component({
  selector: 'app-home',
  imports: [Product],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  http = inject(HttpClient);
  productData = signal<any>([]);
  baseUrl = signal(environment.apiBaseUrl);
  ngOnInit() {
    this.http.get(`${this.baseUrl()}/products`).subscribe({
      next: (res) => {
        console.log(res);
        this.productData.set(res);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
