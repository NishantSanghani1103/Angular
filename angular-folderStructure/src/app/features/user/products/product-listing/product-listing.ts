import { Component, inject, signal } from '@angular/core';
import { ApiService } from '../../../../core/service/api.service';
import { API_ROUTES } from '../../../../core/constant/api.routes';
import { ProductModel } from '../../../../core/models/product.model';

@Component({
  selector: 'app-product-listing',
  imports: [],
  templateUrl: './product-listing.html',
  styleUrl: './product-listing.css',
})
export class ProductListing {
  apiService = inject(ApiService);
  productData = signal<any>([]);
  ngOnInit() {
    this.getProduct();
  }
  async getProduct() {
    const res = await this.apiService.request<any>('GET', API_ROUTES.products.base, null, null, {
      showLoader: true,
    });
    console.log(res);
    this.productData.set(res);
  }
}
