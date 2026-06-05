import { Component } from '@angular/core';
import { CounterService } from '../store/counter.service';

@Component({
  selector: 'app-counter-control',
  imports: [],
  templateUrl: './counter-control.html',
  styleUrl: './counter-control.css',
})
export class CounterControl {
  constructor(public state:CounterService){

  }
}
