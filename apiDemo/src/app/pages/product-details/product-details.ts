import { HttpClient } from '@angular/common/http';
import { Component, effect, signal } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ProductService } from '../../service/product';
import { ProductType } from '../../service/productInterface';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  singleProductData = signal<ProductType | null>(null);
  constructor(
    public router: ActivatedRoute,
    private singleData: ProductService,
  ) {
    effect(() => {
      console.log(this.singleProductData());
    });
  }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const { id } = params;
      // console.log(id);
      this.singleData.getSingleProduct(id).subscribe((data) => {
        // console.log(data);
        this.singleProductData.set(data);
      });
    });
  }
}
