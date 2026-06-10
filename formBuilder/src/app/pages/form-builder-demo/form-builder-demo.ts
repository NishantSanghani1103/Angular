import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder-demo',
  imports: [ReactiveFormsModule],
  templateUrl: './form-builder-demo.html',
  styleUrl: './form-builder-demo.css',
})
export class FormBuilderDemo {
  private fb = inject(FormBuilder);

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  loginSave(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.loginForm.reset()
    }
  }
}
