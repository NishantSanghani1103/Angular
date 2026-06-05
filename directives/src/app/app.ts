import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgForOf } from '../../node_modules/@angular/common/types/_common_module-chunk';
import { NgFor } from '@angular/common';
import { NgIfComponent } from './ng-if-component/ng-if-component';

type User = {
  name: string;
  collage: string;
  age: number;
};
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor, NgIfComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('directives');

  isLoggedIn = signal<boolean>(false);

  userList = signal<User[]>([
    {
      name: 'Nishant',
      collage: 'Mu',
      age: 23,
    },
    {
      name: 'Shyam',
      collage: 'Rk',
      age: 42,
    },
    {
      name: 'Karan',
      collage: 'Lj',
      age: 32,
    },
  ]);

  handleLogin() {
    this.isLoggedIn.set(!this.isLoggedIn());
  }
}
