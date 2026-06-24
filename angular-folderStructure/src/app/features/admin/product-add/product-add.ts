import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Footer } from '../../../layouts/footer/footer';
import { FormValidationError } from '../../../core/utils/form-validation-error/form-validation-error';
import { ApiService } from '../../../core/service/api.service';
import { API_ROUTES } from '../../../core/constant/api.routes';
import { ActivatedRoute, Router } from '@angular/router';
import { InoutNumber } from '../../../core/directives/inout-number';

@Component({
  selector: 'app-product-add',
  imports: [ReactiveFormsModule, InoutNumber, FormValidationError],
  templateUrl: './product-add.html',
  styleUrl: './product-add.css',
})
export class ProductAdd {
  fb = inject(FormBuilder);
  apiService = inject(ApiService);
  router = inject(Router);
  activatedRouted = inject(ActivatedRoute);
  pId = signal<string | null>('');
  productForm!: FormGroup;
  ngOnInit() {
    const id = this.activatedRouted.snapshot.paramMap.get('id');
    this.pId.set(id);

    this.initializeForm();
    if (this.pId()) {
      this.singleProductView();
    }
  }
  initializeForm() {
    this.productForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(250)]],
      price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      stock: ['', [Validators.required, Validators.min(0), Validators.pattern(/^\d+$/)]],
      category: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(500)]],
      thumbnail: [''],
    });
  }

  get f() {
    return this.productForm.controls;
  }
  async productData() {
    console.log(this.productForm.value);
    if (this.productForm.valid) {
      if (this.pId()) {
        const res = await this.apiService.request(
          'PUT',
          API_ROUTES.products.update(this.pId()),
          this.productForm.value,
          null,
          {
            showLoader: true,
          },
        );
        console.log(res);
      } else {
        const res = await this.apiService.request(
          'POST',
          API_ROUTES.products.base,
          this.productForm.value,
          null,
          {
            showLoader: true,
          },
        );
        console.log(res);
      }
      setTimeout(() => {
        this.router.navigate(['/admin/product/view']);
      }, 1000);
    }
  }

  async singleProductView() {
    if (this.pId()) {
      const res = await this.apiService.request('GET', API_ROUTES.products.getById(this.pId()));
      console.log(res);
      this.productForm.patchValue({
        title: res['title'],
        price: res['price'],
        stock: res['stock'],
        category: res['category'],
        description: res['description'],
        thumbnail: res['thumbnail'],
      });
    }
  }
}
