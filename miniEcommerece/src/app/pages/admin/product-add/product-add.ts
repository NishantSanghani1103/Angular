import { Component, inject, signal } from '@angular/core';
import { ApiService } from '../../../service/api.service';
import { Category } from '../../../models/category.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidationError } from '../../../common/validation-error/validation-error';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../models/product.model/product.model';
import { ApiResponse } from '../../../models/ApiType';

@Component({
  selector: 'app-product-add',
  imports: [ReactiveFormsModule, ValidationError],
  templateUrl: './product-add.html',
  styleUrl: './product-add.css',
})
export class ProductAdd {
  apiService = inject(ApiService);
  fb = inject(FormBuilder);
  activatedRoutes = inject(ActivatedRoute);
  categoryData = signal<Category[]>([]);
  pId = signal<string>('');
  productId = signal<string>('');
  productForm!: FormGroup;
  selectedFiles: File[] = [];

  ngOnInit() {
    this.initializeForm();
    this.getCategory();
    const id = this.activatedRoutes.snapshot.paramMap.get('slug');
    console.log(id);
    this.pId.set(id ?? '');
    if (this.pId()) {
      this.singleProductView();
    }
  }

  initializeForm() {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(250)]],
      price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      stock: ['', [Validators.required, Validators.min(0), Validators.pattern(/^\d+$/)]],
      categoryId: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
          ),
        ],
      ],
      description: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(500)]],
      images: [[]],
    });
  }

  get f() {
    return this.productForm.controls;
  }

  onImageSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    this.selectedFiles = Array.from(input.files ?? []);
    this.productForm.patchValue({ images: this.selectedFiles });
  }

  async productSave() {
    if (this.productForm.valid) {
      const formData = new FormData();
      formData.append('name', this.productForm.value.name);
      formData.append('price', this.productForm.value.price);
      formData.append('stock', this.productForm.value.stock);
      formData.append('categoryId', this.productForm.value.categoryId);
      formData.append('description', this.productForm.value.description);

      this.selectedFiles.forEach((file) => {
        formData.append('images', file);
      });
      let res: ApiResponse;
      if (this.pId()) {
        res = await this.apiService.request<Product>(
          'PUT',
          `product/edit/${this.productId()}`,
          formData,
          null,
          {
            showLoader: true,
            showToaster: true,
            useToken: true,
          },
        );
      } else {
        res = await this.apiService.request<Product>('POST', 'product/add', formData, null, {
          showLoader: true,
          showToaster: true,
          useToken: true,
        });

        console.log(res);
      }
    }
  }

  async getCategory() {
    const res = await this.apiService.request<Category[]>('GET', 'category/view', null, null, {
      showLoader: true,
    });

    this.categoryData.set(res.data ?? []);
  }

  async singleProductView() {
    const res = await this.apiService.request<Product>(
      'GET',
      `product/view/${this.pId()}`,
      null,
      null,
      {
        showLoader: true,
      },
    );
    console.log(res);
    if (res.status) {
      this.productForm.patchValue({
        name: res.data?.name,
        price: res.data?.price,
        stock: res.data?.stock,
        categoryId: res.data?.categoryId,
        description: res.data?.description,
      });
      this.productId.set(res.data?.id ?? '');
    }
  }
}
