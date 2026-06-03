import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Contact } from './contact/contact';
import { InputEvent } from './input-event/input-event';
import { PropertyBinding } from './property-binding/property-binding';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Contact, Login,InputEvent,PropertyBinding],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('firstProject');
  counter: number = 0;

  counterCick(type: string) {
    if (type == 'increment') {
      this.counter < 10 && this.counter++;
    } else {
      this.counter > 0 && this.counter--;
    }
  }
}
