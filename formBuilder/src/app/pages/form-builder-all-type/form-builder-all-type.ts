import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidattionError } from '../../common/validattion-error/validattion-error';

@Component({
  selector: 'app-form-builder-all-type',
  imports: [ReactiveFormsModule, ValidattionError],
  templateUrl: './form-builder-all-type.html',
  styleUrl: './form-builder-all-type.css',
})
export class FormBuilderAllType {
  constructor(private fb: FormBuilder) {
    // console.log(fb.control);
  }
  registerForm!: FormGroup;

  ngOnInit() {
    this.initializeForm();
    console.log(this.registerForm.controls);
    console.log(this.hobbies);
  }
  initializeForm() {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      age: [null, [Validators.required, Validators.min(18), Validators.max(100)]],
      date: ['', Validators.required],
      time: ['', Validators.required],
      color: ['#000000'],
      experience: [null],
      country: ['', Validators.required],
      skills: [[]],
      gender: ['', Validators.required],
      hobbies: this.fb.array([]),
      resume: '',
      search: [''],
      website: [''],
      address: ['', [Validators.required, Validators.maxLength(200)]],
      phone: [null, [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    });
  }
  get f() {
    return this.registerForm.controls;
  }
  get hobbies() {
    // console.log(this.hobbies);

    return this.registerForm.get('hobbies') as FormArray;
  }

  onHobbyChane(event: any, hobby: string) {
    if (event.target.checked) {
      this.hobbies.push(this.fb.control(hobby));
    } else {
      const index = this.hobbies.controls.findIndex((value, index) => value.value == hobby);
      if (index > 0) {
        this.hobbies.removeAt(index);
      }
    }
  }
  onFileSelected(event: any) {
    console.log(event.target.files?.[0].name);

    const fileName = event.target.files[0].name;
    console.log(fileName);

    if (fileName) {
      this.registerForm.patchValue({
        resume: fileName,
      });
      console.log(this.registerForm.get('resume')?.value);
    }
  }

  registerSaveData(event: any) {
    event.preventDefault();
    // console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
  }
}
