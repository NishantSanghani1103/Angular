import { Component, effect, signal } from '@angular/core';
import { ProductRow } from '../product-row/product-row';
import { Product } from '../../service/productType';
import { ProductService } from '../../service/product.service';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-product-list',
  imports: [ProductRow, RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  productData = signal<Product[]>([]);

  constructor(
    private productService: ProductService,
    private apiService: ApiService,
  ) {}
  ngOnInit() {
    this.getProduct();
  }
  async getProduct() {
    // this.productService.getProducts().subscribe((data) => {
    //   console.log(data);
    //   this.productData.set(data);
    // });

    const res = await this.apiService.request<Product[]>('GET', 'products', null, null, {
      showLoader: true,
    });
    // console.log(res);
    this.productData.set(res?.data?? []);
  }
}
