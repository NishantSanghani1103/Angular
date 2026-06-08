import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../service/productType';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-row',
  imports: [RouterLink],
  templateUrl: './product-row.html',
  styleUrl: './product-row.css',
})
export class ProductRow {
  @Input() pData!: Product;
  @Output() refresh = new EventEmitter();
  constructor(
    private productService: ProductService,
    private router: Router,
  ) {}

  productDelete(id: number | string) {
    if (confirm('Are You Want To Delete Product ?')) {
      this.productService.productDeleteService(id).subscribe((res) => {
        this.refresh.emit();
      });
    }
  }
}
