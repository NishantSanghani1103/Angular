import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormValidationError } from '../../common/form-validation-error/form-validation-error';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-add',
  imports: [ReactiveFormsModule, FormValidationError],
  templateUrl: './product-add.html',
  styleUrl: './product-add.css',
})
export class ProductAdd {
  productForm!: FormGroup;
  http = inject(HttpClient);
  baseUrl = signal(environment.apiBaseUrl);
  constructor(
    private fb: FormBuilder,
    private toast: ToastrService,
    public router: Router,
  ) {}
  ngOnInit() {
    this.initializeProductForm();
    console.log(this.productForm.controls);
  }
  initializeProductForm() {
    this.productForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(250)]],
      category: ['', Validators.required],
      brand: ['', Validators.required],
      price: [null],
      stock: [null, Validators.min(1)],
      rating: [null, [Validators.min(1), Validators.max(5)]],
      image: [''],
    });
  }

  get f() {
    return this.productForm.controls;
  }
  
  productSave(event: any) {
    // alert();
    if (this.productForm.invalid) {
      return;
    }
    const productData = this.productForm.value;

    this.http.post(`${this.baseUrl()}/products`, productData).subscribe({
      next: (res) => {
        this.toast.success('Product Created Successfully');
        this.productForm.reset();
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 2000);
      },
      error: (error) => {
        this.toast.error(error);
      },
    });
  }
}
