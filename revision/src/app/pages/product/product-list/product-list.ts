import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  http = inject(HttpClient);
  productData = signal<any>([]);

  ngOnInit() {
    this.http.get(`http://localhost:3000/products`).subscribe({
      next: (res) => {
        console.log(res);
        this.productData.set(res)
      },
      error: (error) => {
        console.log(error);
        
      },
    });
  }
}
