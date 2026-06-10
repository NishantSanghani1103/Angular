import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-validattion-error',
  imports: [],
  templateUrl: './validattion-error.html',
  styleUrl: './validattion-error.css',
})
export class ValidattionError {
  @Input() control!: AbstractControl | null;
  @Input() label = 'Field';
}
