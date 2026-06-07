import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  counter = signal(0);
  counterIncrement() {
    this.counter() < 10 && this.counter.update((value) => value + 1);
  }
  counterDecrement() {
    this.counter() > 0 && this.counter.update((value) => value - 1);
  }
  counterReset() {
    this.counter.set(0);
  }
}
