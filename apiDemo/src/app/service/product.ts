import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ProductResponse, ProductType } from './productInterface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = `${environment.apiUrl}`;
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<ProductResponse>(`${this.apiUrl}/products`);
  }

  getSingleProduct(id: number) {
    return this.http.get<ProductType>(`${this.apiUrl}/products/${id}`);
  }
}
