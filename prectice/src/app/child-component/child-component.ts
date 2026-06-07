import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.html',
  styleUrl: './child-component.css',
})
export class ChildComponent {
  @Input() userList: string | undefined;
  @Input() index: number | undefined;
  @Output() selectedUser = new EventEmitter();
  @Output() deleteUser = new EventEmitter();
  showUser(name: string | undefined) {
    console.log(name);
    this.selectedUser.emit(name);
  }
  handleDeleteUser(name: string | undefined) {
    this.deleteUser.emit(name)
    console.log(name);
  }
}
