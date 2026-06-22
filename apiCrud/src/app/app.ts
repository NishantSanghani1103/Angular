import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './service/productType';
import { ProductService } from './service/product.service';
import { ProductRow } from './pages/product-row/product-row';
import { Loader } from './common/loader/loader';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductRow, Loader],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('apiCrud');
  productData = signal<Product[]>([]);

  constructor(private productService: ProductService) {
    effect(() => {
      console.log(this.productData());
    });
  }
  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      console.log(data);
      this.productData.set(data);
    });
  }
}
