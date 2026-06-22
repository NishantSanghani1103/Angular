import { Component, EventEmitter, inject, Input, Output, output } from '@angular/core';
import { Product } from '../../../models/product.model/product.model';
import { ApiService } from '../../../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tr[app-product-rows]',
  imports: [],
  templateUrl: './product-rows.html',
  styleUrl: './product-rows.css',
})
export class ProductRows {
  @Input() pData!: Product;
  @Input() index!: number;
  @Output() refresh = new EventEmitter();
  apiService = inject(ApiService);
  router = inject(Router);

  async editProduct(slug: string) {
    this.router.navigate([`/admin/product/edit/${slug}`]);
  }

  async deleteProduct(id: string) {
    alert(id);
    const res = await this.apiService.request('DELETE', `product/delete/${id}`, null, null, {
      showLoader: true,
      showToaster: true,
      useToken: true,
    });
    if (res.status) {
      this.refresh.emit();
    }
  }
}
