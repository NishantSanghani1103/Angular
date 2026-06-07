import { Component } from '@angular/core';
import { CounterService } from '../store/counter.service';

@Component({
  selector: 'app-counter-controller',
  imports: [],
  templateUrl: './counter-controller.html',
  styleUrl: './counter-controller.css',
})
export class CounterController {
  constructor(public state: CounterService) {}
}
