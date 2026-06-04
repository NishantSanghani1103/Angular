import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-computed-signals',
  imports: [],
  templateUrl: './computed-signals.html',
  styleUrl: './computed-signals.css',
})
export class ComputedSignals {
  height = signal(10);
  weight = signal(20);
  area = computed(() => this.height() * this.weight());
  constructor() {
    effect(() => {
      console.log('updating...');
      console.log(this.area());
    });
  }
  handleHeight() {
    this.height.update((value) => value + 10);
  }
}
