import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.html',
  styleUrl: './property-binding.css',
})
export class PropertyBinding {
  disble = true;
  inputreadOnly = true;
  img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMqzMqxo3FdmgI207Z1QuXm6ndnJxp7QGm_g&s"
  toggleButton() {
    this.disble = !this.disble;
  }

  toggleReadOnly() {
    this.inputreadOnly=!this.inputreadOnly
  }
}
