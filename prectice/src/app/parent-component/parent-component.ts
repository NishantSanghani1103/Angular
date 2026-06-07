import { Component, effect, signal } from '@angular/core';
import { ChildComponent } from '../child-component/child-component';

@Component({
  selector: 'app-parent-component',
  imports: [ChildComponent],
  templateUrl: './parent-component.html',
  styleUrl: './parent-component.css',
})
export class ParentComponent {
  userList = signal<string[]>(['Nishant', 'Sanghani', 'Karan']);

  userValue = signal('');
  constructor() {
    effect(() => {
      console.log(this.userValue());
    });
  }
  handleUserValue(value: string) {
    this.userValue.set(value);
  }

  addUser() {
    if (this.userValue()) {
      this.userList.update((value) => [...value, this.userValue()]);
      this.userValue.set('');
    } else {
      alert('Please Fill UserName....!!');
    }
  }
  selectedUser(name: string) {
    this.userValue.set(name);
  }
  deleteUser(name: string) {
    if (confirm('Are You Want To Delete User ?')) {
      this.userList.update((value) => value.filter((val, ind) => name != val));
    }
  }
}
