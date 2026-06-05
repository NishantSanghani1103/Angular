import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  
  styleUrl: './signals.css',
})
export class Signals {
  height = signal(10);
  width = signal(20);
  area = computed(() => this.height() * this.width());

  changeHeight() {
    this.height.update((value) => value + 10);
  }
}
