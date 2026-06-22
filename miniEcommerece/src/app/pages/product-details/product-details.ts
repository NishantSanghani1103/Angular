import { Component, computed, inject, signal } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Product } from '../../models/product.model/product.model';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../service/cart.service';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-product-details',
  imports: [NgClass],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  apiService = inject(ApiService);
  cartService = inject(CartService);
  routes = inject(ActivatedRoute);
  slug: string | null = '';
  pData = signal<Product | null>(null);

  isInCart = computed(() =>
    this.cartService.cartItems().some((value) => value.productId == this.pData()?.id),
  );
  ngOnInit() {
    this.getSingleProduct();
  }
  async getSingleProduct() {
    this.slug = this.routes.snapshot.paramMap.get('slug');
    const res = await this.apiService.request<Product>(
      'GET',
      `product/view/${this.slug}`,
      null,
      null,
      {
        showLoader: true,
      },
    );
    this.pData.set(res.data ?? null);
  }
}
