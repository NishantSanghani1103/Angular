import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child-component/child-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChildComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('childToParent');

  userList = signal<string[]>(['nishant', 'karan', 'ram', 'kishan']);

  userName = signal('');

  selectedUser(name: string) {
    // console.log(name);
    this.userName.set(name);
  }

  deleteUser(name: string) {
    console.log(name);

    this.userList.update((value) => value.filter((val, ind) => val != name));
  }
}
