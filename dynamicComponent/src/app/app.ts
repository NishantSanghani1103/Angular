import { Component, signal, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, User],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('dynamicComponent');

  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;
  
  async loadComponent() {
    this.container?.clear()
    const { User } = await import('./user/user');

    this.container?.createComponent(User);
  }
}
