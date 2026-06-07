import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-from-data',
  imports: [FormField],
  templateUrl: './from-data.html',
  styleUrl: './from-data.css',
})
export class FromData {
  registerFormModel = signal({
    name: '',
    email: '',
    password: '',
    age: '',
    dob: '',
    gender: '',
    condition: false,
    country: '',
    address: '',
  });

  registerForm = form(this.registerFormModel);

  registerData(event: SubmitEvent) {
    event.preventDefault();
    console.log(this.registerForm().value());
    
  }
}
