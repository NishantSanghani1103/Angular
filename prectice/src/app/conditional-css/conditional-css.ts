import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-conditional-css',
  imports: [NgClass],
  templateUrl: './conditional-css.html',
  styleUrl: './conditional-css.css',
})
export class ConditionalCss {
  date = signal(new Date().toLocaleTimeString());
  constructor() {
    setInterval(() => {
      this.date.set(new Date().toLocaleTimeString());
    }, 1000);
  }
}
