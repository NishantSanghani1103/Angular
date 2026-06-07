import { Component } from '@angular/core';
import { CounterService } from '../store/counter.service';

@Component({
  selector: 'app-counter-display',
  imports: [],
  templateUrl: './counter-display.html',
  styleUrl: './counter-display.css',
})
export class CounterDisplay {
  constructor(public state: CounterService) {}
}
