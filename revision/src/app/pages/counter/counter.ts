import { Component } from '@angular/core';
import { CounterService } from '../../service/counter.service';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  constructor(public count: CounterService) {}
}
