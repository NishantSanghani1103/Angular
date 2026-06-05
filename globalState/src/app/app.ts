import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterDisplay } from './counter-display/counter-display';
import { CounterControl } from './counter-control/counter-control';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CounterDisplay,CounterControl],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('globalState');
}
