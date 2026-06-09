import { NgClass } from '@angular/common';
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-conditional-css',
  imports: [NgClass],
  templateUrl: './conditional-css.html',
  styleUrl: './conditional-css.css',
})
export class ConditionalCss {
  date = signal(new Date().toLocaleTimeString());
  colorValue = signal<string>('white');
  constructor() {

    effect(()=>{
      console.log(this.colorValue());
      
    })

    setInterval(() => {
      this.date.set(new Date().toLocaleTimeString());
    }, 1000);
  }



  handleColor(event: any) {
    this.colorValue.set(event.target.value);
  }
}
