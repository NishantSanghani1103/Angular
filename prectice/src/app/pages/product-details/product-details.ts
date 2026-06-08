import { Component, effect, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  singleData = signal<any>('');
  constructor(
    public route: ActivatedRoute,
    public product: ProductService,
  ) {
    effect(() => {
      console.log(this.singleData());
      
    });
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      const { name } = params;
      const productData = this.product.products();
      const finalData = productData.filter((value, index) => value.name == name);
      console.log(finalData);
      this.singleData.set(finalData[0]);
    });
  }
}
