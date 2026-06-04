import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
  counter = 0;
  counterSignals = signal(0);
  constructor() {
    effect(() => {
      console.log('counter is', this.counter);
      console.log('Counter Signals Is : ', this.counterSignals());
    });
  }

  changeCounter() {
    this.counter++;
    console.log(this.counter);
  }
  changeCounterSignles() {
    this.counterSignals.update((value) => value + 1);
  }
}
