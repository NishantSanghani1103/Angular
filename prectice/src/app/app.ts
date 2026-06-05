import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PropertyBinding } from './property-binding/property-binding';
import { Signals } from './signals/signals';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,PropertyBinding,Signals],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('prectice');
}
