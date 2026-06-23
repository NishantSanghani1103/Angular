import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, computed, effect, inject, signal, ViewChild } from '@angular/core';
import { apiBaseUrl } from '../../../environment/environment';
import { Product } from '../../models/product.model/product.model';
import { ProductRow } from '../product-row/product-row';
import { Category, categoryApiResponse } from '../../models/category.model';
import { CategoryRow } from '../category-row/category-row';
import { Brands, brandsApiResponse } from '../../models/brandModel';
import { ProductFiltersType } from '../../models/filterProduct';
import { BrandRow } from '../brand-row/brand-row';
import { FormsModule } from '@angular/forms';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { ApiService } from '../../service/api.service';
import { CartService } from '../../service/cart.service';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-product-listing',
  imports: [ProductRow, CategoryRow, BrandRow, FormsModule, MatPaginatorModule],
  templateUrl: './product-listing.html',
  styleUrl: './product-listing.css',
})
export class ProductListing {
  @ViewChild('paginator') paginator!: MatPaginator;
  http = inject(HttpClient);
  cartService = inject(CartService);
  apiUrl = signal<string>(apiBaseUrl);
  productData = signal<Product[]>([]);
  categoryData = signal<Category[]>([]);
  brandData = signal<Brands[]>([]);
  loading = signal<boolean>(true);
  currentPage = 1;
  pageSize = 4;
  totalRecords = signal<number>(0);
  private initialized = false;
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

  // isInCart=computed((this.cartService))

  constructor(private apiService: ApiService) {
    effect(() => {
      console.log(this.totalRecords());

      this.filterProduct();

      if (!this.initialized) {
        this.initialized = true;
        return;
      }

      this.getProduct();
    });
  }
  ngOnInit() {
    this.getProduct();
    this.getCategory();
    this.getBrand();
  }

  // getProduct(filter: any) {
  //   let params = new HttpParams();
  //   if (filter.categories) {
  //     params = params.set('categories', filter.categories.join(','));
  //   }
  //   if (filter.brands) {
  //     params = params.set('brands', filter.brands.join(','));
  //   }
  //   if (filter.price_from && filter.price_to) {
  //     params = params.set('price_from', filter.price_from).set('price_to', filter.price_to);
  //   }
  //   this.http.get<ProductApiResponse>(`${this.apiUrl()}/products.php`, { params }).subscribe({
  //     next: (res) => {
  //       // console.log(res.data);
  //       this.productData.set(res.data);
  //       this.loading.set(false);
  //     },
  //     error: (error) => {
  //       console.log(error);
  //     },
  //   });
  // }

  // async getCategory() {
  //   // this.http.get<categoryApiResponse>(`${this.apiUrl()}/categories.php`).subscribe({
  //   //   next: (res) => {
  //   //     // console.log(res);
  //   //     this.categoryData.set(res.data);
  //   //   },
  //   //   error: (error) => {
  //   //     console.log(error);
  //   //   },
  //   // });

  //   try {
  //     const res = await lastValueFrom(
  //       this.http.get<categoryApiResponse>(`${this.apiUrl()}/categories.php`),
  //     );
  //     this.categoryData.set(res.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  onPageChange(event: any) {
    console.log(event);
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.getProduct();
    
  }

  async getProduct() {
    const res = await this.apiService.request<Product[]>(
      'GET',
      'product/view',
      null,
      {
        categoryId: this.filterProduct().categories.join(','),
        skip: this.currentPage ?? 1,
        limit: this.pageSize,
      },
      {
        showLoader: true,
        showToaster: false,
      },
    );
    this.productData.set(res.data ?? []);
    this.totalRecords.set(res['count']);
    console.log(res);
  }

  async getCategory() {
    // return lastValueFrom(this.http.get<categoryApiResponse>(`${this.apiUrl()}/categories.php`));
    try {
      const res = await this.apiService.request<Category[]>('GET', 'category/view', null, null, {
        showLoader: true,
        showToaster: false,
      });
      // console.log(res);
      this.categoryData.set(res.data ?? []);
    } catch (error) {
      console.log(error);
    }
  }

  async getBrand() {
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
    this.currentPage = 1;
    this.paginator.firstPage()
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
