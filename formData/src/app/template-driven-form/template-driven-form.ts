import { Component, effect, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
// interface userSignal{
//   name:string,
//   email:string,
//   password:string,
//   color:string
// }
@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule],
  templateUrl: './template-driven-form.html',
  styleUrl: './template-driven-form.css',
})

export class TemplateDrivenForm {
  userDetails = signal<any>({});

  addUser(data: NgForm) {
    console.log(data);
    this.userDetails.set(data);
  }
}
