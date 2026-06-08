import { Component, Input } from '@angular/core';
import { ProductType } from '../../service/productInterface';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-product-list',
  imports: [RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  @Input() productData!: ProductType;
}
