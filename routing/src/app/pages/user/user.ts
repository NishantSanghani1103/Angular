import { Component, signal } from '@angular/core';
import { UserService } from '../../service/user.service/user.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [RouterLink],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  userData = signal<any>([]);
  constructor(public users: UserService) {}
  ngOnInit() {
    const data = this.users.userList();
    console.log(data);
    
    this.userData.set(data);
  }
}
