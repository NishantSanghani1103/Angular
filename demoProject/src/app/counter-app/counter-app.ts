import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  imports: [],
  templateUrl: './counter-app.html',
  styleUrl: './counter-app.css',
})
export class CounterApp {
  counter: WritableSignal<number> = signal(0);

  handleCounter(type: string) {
    if (type == 'increment') {
      this.counter() < 10 && this.counter.update((value) => value + 1);
    } else if (type == 'decrement') {
      this.counter() > 0 && this.counter.update((value) => value - 1);
    } else {
      this.counter.set(0);
    }
  }
}
