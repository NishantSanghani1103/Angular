import { Component, signal } from '@angular/core';
import { NgClass } from "../../../node_modules/@angular/common/types/_common_module-chunk";

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
