import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  imports: [ReactiveFormsModule],
  templateUrl: './form-builder.html',
  styleUrl: './form-builder.css',
})
export class FormBuilderDemo {
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  initializeForm() {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
    });
  }
  saveLogin(){
    console.log(this.loginForm.value);
    
  }
}
