import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from './store/counter.action';
import { Observable } from 'rxjs';
import { AppState, selectCounter } from './store/counter.selector';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('NgRx-tutorial');

  counter$!: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.counter$ = this.store.select(selectCounter);
  }
  increment() {
    this.store.dispatch(increment());
  }
  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
