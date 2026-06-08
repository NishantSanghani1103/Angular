import { Component, signal } from '@angular/core';
import { ProductType } from '../../service/productInterface';
import { ProductService } from '../../service/product';
import { ProductList } from '../product-list/product-list';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [RouterOutlet,ProductList],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  constructor(private productService: ProductService) {}
  productData = signal<ProductType[] | undefined>(undefined);
  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      const { products } = data;
      console.log(products);
      this.productData.set(products);
    });
  }
}
