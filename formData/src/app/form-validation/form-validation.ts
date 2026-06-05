import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { email, form, FormField, minLength, required } from '@angular/forms/signals';

@Component({
  selector: 'app-form-validation',
  imports: [FormField, NgClass],
  templateUrl: './form-validation.html',
  styleUrl: './form-validation.css',
})
export class FormValidation {
  registerForm = signal({
    name: '',
    email: '',
    password: '',
  });

  registerModel = form(this.registerForm, (field) => {
    required(field.name, {
      message: `Username Is Required`,
    });
    minLength(field.name, 2, {
      message: 'MiniMum Length Shoud Be 2',
    });
    required(field.email, {
      message: 'Email Address Is Required',
    });
    email(field.email, {
      message: 'Please Enter Valid Email Address',
    });
    required(field.password, {
      message: `Password Is Required`,
    });
    minLength(field.password, 6, {
      message: `Minimum Password Should Be More Than 6 Character`,
    });
  });

  userData(event: SubmitEvent) {
    event.preventDefault();
    if (this.registerModel().invalid()) {
      alert('Invalid Details');
      return
    }
    console.log(this.registerModel().value());
  }
  resetForm() {
    this.registerForm.set({
      name: '',
      email: '',
      password: '',
    });
  }
}
