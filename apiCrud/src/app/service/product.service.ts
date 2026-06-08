import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { Product } from './productType';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}
  getProducts() {
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }
  productAddService(data: Product) {
    return this.http.post<Product>(`${this.baseUrl}/products`, data);
  }
  productDeleteService(id: string | number) {
    return this.http.delete(`${this.baseUrl}/products/${id}`);
  }
  productSingleViewService(id: string | number) {
    return this.http.get<Product>(`${this.baseUrl}/products/${id}`);
  }
  productEditService(id: number | string, data: Product) {
    return this.http.put<Product>(`${this.baseUrl}/products/${id}`, data);
  }
}
