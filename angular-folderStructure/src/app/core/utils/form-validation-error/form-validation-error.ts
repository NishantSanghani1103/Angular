import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-validation-error',
  imports: [],
  templateUrl: './form-validation-error.html',
  styleUrl: './form-validation-error.css',
})
export class FormValidationError {
  @Input() control!: AbstractControl | null;
  @Input() label = 'Field';
}
