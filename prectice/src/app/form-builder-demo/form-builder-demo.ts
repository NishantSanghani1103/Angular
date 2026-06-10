import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidationError } from '../commpon/validation-error/validation-error';

@Component({
  selector: 'app-form-builder-demo',
  imports: [ReactiveFormsModule, ValidationError],
  templateUrl: './form-builder-demo.html',
  styleUrl: './form-builder-demo.css',
})
export class FormBuilderDemo {
  registerFrom!: FormGroup;
  selectedFile: File | null = null;
  fileName: string = '';
  multipleSelectedFile: File[] = [];
  multipleFiles: string[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
  }
  initializeForm() {
    this.registerFrom = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      gender: ['', Validators.required],
      hobbies: this.fb.array([]),
      skills: [[]],
      fileName: '',
      fileNames:[[]]
    });
  }

  get f() {
    return this.registerFrom.controls;
  }
  get hobbies() {
    return this.registerFrom.get('hobbies') as FormArray;
  }
  changeHobby(event: any, hobby: string) {
    if (event.target.checked) {
      this.hobbies.push(this.fb.control(hobby));
    } else {
      const index = this.hobbies.controls.findIndex((value, index) => value.value === hobby);
      if (index > 0) {
        this.hobbies.removeAt(index);
      }
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.fileName = this.selectedFile.name;

      console.log('File name:', this.fileName);
      this.registerFrom.patchValue({
        fileName: this.selectedFile?.name,
      });
    }
  }

  onFileSelectedMultipleFile(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      // console.log(input.files);

      this.multipleSelectedFile = Array.from(input.files);

      this.multipleFiles = this.multipleSelectedFile.map((value) => value.name);

      // console.log(this.multipleSelectedFile);
      // console.log(this.multipleFiles);

      this.registerFrom.patchValue({
        fileNames: this.multipleFiles,
      });
    }
  }
  saveData(event: any) {
    if(this.registerFrom.invalid){
      return
    }
    console.log(this.registerFrom.value);
  }
}
