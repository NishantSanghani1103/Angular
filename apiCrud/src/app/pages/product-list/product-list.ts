import { Component, effect, signal } from '@angular/core';
import { ProductRow } from '../product-row/product-row';
import { Product } from '../../service/productType';
import { ProductService } from '../../service/product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [ProductRow, RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  productData = signal<Product[]>([]);

  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.getProduct()
  }
  getProduct() {
    this.productService.getProducts().subscribe((data) => {
      console.log(data);
      this.productData.set(data);
    });
  }
}
