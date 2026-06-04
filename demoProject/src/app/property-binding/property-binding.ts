import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.html',
  styleUrl: './property-binding.css',
})
export class PropertyBinding {
  isDisable = false;
  isReadOnly = false;
  toggleDisable() {
    if (confirm('Are You Confirm To Disable Button ?')) {
      this.isDisable = !this.isDisable;
    }
  }

  toggleReadOnly() {
    this.isReadOnly=!this.isReadOnly
  }
}
