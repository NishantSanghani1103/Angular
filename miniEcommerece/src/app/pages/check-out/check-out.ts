import { Component } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidationError } from '../../common/validation-error/validation-error';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-check-out',
  imports: [ReactiveFormsModule, ValidationError],
  templateUrl: './check-out.html',
  styleUrl: './check-out.css',
})
export class CheckOut {
  shippingForm!: FormGroup;
  constructor(
    public cartService: CartService,
    private fb: FormBuilder,
    private apiService: ApiService,
  ) {}
  ngOnInit() {
    this.initializeForm();
  }
  initializeForm() {
    this.shippingForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      address: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(250)]],
      city: ['', Validators.required],
      postalCode: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
      country: ['', Validators.required],
      paymentMethod: ['', Validators.required],
    });
  }

  get f() {
    return this.shippingForm.controls;
  }

  async orderSave() {
    if (this.shippingForm.valid) {
      const res = await this.apiService.request(
        'POST',
        'order/add',
        this.shippingForm.value,
        null,
        {
          showLoader: true,
          showToaster: true,
          useToken:true
        },
      );
      console.log(res);
      
    }
    console.log(this.shippingForm.value);
  }
}
