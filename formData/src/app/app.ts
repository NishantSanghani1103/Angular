import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { form, FormField } from '@angular/forms/signals';
import { FormValidation } from "./form-validation/form-validation";
import { TemplateDrivenForm } from './template-driven-form/template-driven-form';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormField, FormValidation,TemplateDrivenForm],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('formData');

  loginMdel = signal({
    name: '',
    email: '',
    password: '',
  });

  loginForm = form(this.loginMdel);

  userData() {
    console.log(this.loginForm().value());
   
  }

  resetForm() {
    this.loginMdel.set({
      name: '',
      email: '',
      password: '',
    });
  }
}
