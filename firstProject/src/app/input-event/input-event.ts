import { Component } from '@angular/core';

@Component({
  selector: 'app-input-event',
  imports: [],
  templateUrl: './input-event.html',
  styleUrl: './input-event.css',
})
export class InputEvent {
  handleChange(event: any) {
    console.log(event.target.value);
  }

  handleDropDownChange(event: any) {
    console.log(event);
    console.log(event.type);
    console.log(event.target.value);
  }

  handleBlurChange(event: any) {
    console.log(event.type);
    console.log(event.target.value);
  }
  handleFocusChange(event: any) {
    console.log(event.type);
    console.log(event.target.value);
  }
  handleMouseLeaveChange(event: any) {
    console.log(event.type);
  }
  handleMouseEnterChange(event: any) {
    console.log(event.type);
  }
}
