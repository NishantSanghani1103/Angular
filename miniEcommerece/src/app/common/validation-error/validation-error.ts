import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-validation-error',
  imports: [],
  templateUrl: './validation-error.html',
  styleUrl: './validation-error.css',
})
export class ValidationError {
  @Input() control!: AbstractControl | null;
  @Input() label = 'Field';
}
