import { Component, inject, Inject, signal } from '@angular/core';
import { ApiService } from '../../../core/service/api.service';
import { API_ROUTES } from '../../../core/constant/api.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-view',
  imports: [],
  templateUrl: './product-view.html',
  styleUrl: './product-view.css',
})
export class ProductView {
  apiService = inject(ApiService);
  productData = signal<any>([]);
  router = inject(Router);
  ngOnInit() {
    this.getProduct();
  }
  async getProduct() {
    const res = await this.apiService.request('GET', API_ROUTES.products.base, null, null, {
      showLoader: true,
    });
    console.log(res);
    this.productData.set(res);
  }

  async deleteProduct(id: string | number) {
    if (confirm('Are You Sure For Delete Product ? ')) {
      const res = await this.apiService.request(
        'DELETE',
        API_ROUTES.products.delete(id),
        null,
        null,
        {
          showLoader: true,
        },
      );
      this.getProduct();
      console.log(res);
    }
  }
  editProduct(id: string) {
    this.router.navigate(['admin/product/edit', id]);
  }
}
