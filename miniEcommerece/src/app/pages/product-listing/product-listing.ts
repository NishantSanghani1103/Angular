import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, effect, inject, signal } from '@angular/core';
import { apiBaseUrl } from '../../../environment/environment';
import { Product, ProductApiResponse } from '../../models/product.model/product.model';
import { ProductRow } from '../product-row/product-row';
import { Category, categoryApiResponse } from '../../models/category.model';
import { CategoryRow } from '../category-row/category-row';
import { Brands, brandsApiResponse } from '../../models/brandModel';
import { ProductFiltersType } from '../../models/filterProduct';
import { BrandRow } from '../brand-row/brand-row';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
@Component({
  selector: 'app-product-listing',
  imports: [ProductRow, CategoryRow, BrandRow, FormsModule],
  templateUrl: './product-listing.html',
  styleUrl: './product-listing.css',
})
export class ProductListing {
  http = inject(HttpClient);
  apiUrl = signal<string>(apiBaseUrl);
  productData = signal<Product[]>([]);
  categoryData = signal<Category[]>([]);
  brandData = signal<Brands[]>([]);

  filterProduct = signal<ProductFiltersType>({
    categories: [],
    brands: [],
    price_from: 0,
    price_to: 0,
    rating: 0,
    sort: 'latest',
    page: 1,
    search: '',
  });

  constructor() {
    effect(() => {
      this.getProduct(this.filterProduct());
      this.getCategory();
      this.getBrand();
    });
  }

  getProduct(filter: any) {
    let params = new HttpParams();
    if (filter.categories) {
      params = params.set('categories', filter.categories.join(','));
    }
    if (filter.brands) {
      params = params.set('brands', filter.brands.join(','));
    }
    if (filter.price_from && filter.price_to) {
      params = params.set('price_from', filter.price_from).set('price_to', filter.price_to);
    }
    this.http.get<ProductApiResponse>(`${this.apiUrl()}/products.php`, { params }).subscribe({
      next: (res) => {
        // console.log(res.data);
        this.productData.set(res.data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  async getCategory() {
    // this.http.get<categoryApiResponse>(`${this.apiUrl()}/categories.php`).subscribe({
    //   next: (res) => {
    //     // console.log(res);
    //     this.categoryData.set(res.data);
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   },
    // });

    try {
      const res = await firstValueFrom(
        this.http.get<categoryApiResponse>(`${this.apiUrl()}/categories.php`),
      );
      this.categoryData.set(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  getBrand() {
    this.http.get<brandsApiResponse>(`${this.apiUrl()}/brands.php`).subscribe({
      next: (res) => {
        console.log(res);
        this.brandData.set(res.data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  categoryChange(event: any) {
    if (event.target.checked) {
      this.filterProduct.update((value) => ({
        ...value,
        categories: [...this.filterProduct().categories, event.target.value],
      }));
    } else {
      this.filterProduct.update((value) => ({
        ...value,
        categories: this.filterProduct().categories.filter((val, ind) => val != event.target.value),
      }));
    }
  }

  brandsChange(event: any) {
    if (event.target.checked) {
      this.filterProduct.update((value) => ({
        ...value,
        brands: [...this.filterProduct().brands, event.target.value],
      }));
    } else {
      this.filterProduct.update((value) => ({
        ...value,
        brands: this.filterProduct().brands.filter((val, ind) => val != event.target.value),
      }));
    }
  }

  priceChange(value: number[]) {
    console.log(value);
    this.filterProduct.update((val) => ({
      ...val,
      price_from: value[0],
      price_to: value[1],
    }));
  }
}
