import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  counter = signal(0);

  counterIncrement() {
    this.counter.update((value) => value + 1);
  }

  counterDecrement() {
    this.counter.update((value) => value - 1);
  }
  counterReset(){
    this.counter.set(0)
  }
}
