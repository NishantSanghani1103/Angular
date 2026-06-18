import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private readonly _count = signal(0);

  count = this._count.asReadonly();

  increment() {
    this._count.update((value) => value + 1);
  }
  decrement() {
    this._count.update((value) => value - 1);
  }
}
