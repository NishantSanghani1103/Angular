import { Component, effect, signal } from '@angular/core';
import { ChildComponent } from '../child-component/child-component';

@Component({
  selector: 'app-parent-component',
  imports: [ChildComponent],
  templateUrl: './parent-component.html',
  styleUrl: './parent-component.css',
})
export class ParentComponent {


  userName = signal<string>('nishant');

  userList = signal<string[]>(['nishant', 'ram', 'kishan', 'bharat']);

  userInputValue = signal<string>('');

  readOnly = signal<boolean>(false);

  constructor() {
    effect(() => {
      console.log(this.readOnly());
    });
  }
  addUser() {
    const checkData = this.userList().includes(this.userInputValue());
    console.log(checkData);
    
    if (!checkData) {
      this.userList.update((value) => [...value, this.userInputValue()]);
      this.readOnly.set(true);
    }
    else{
      alert("UserName Already Exists....!!")
    }
  }
}
