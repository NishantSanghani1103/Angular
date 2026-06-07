import { Component, effect, signal } from '@angular/core';
import { UserService } from '../../service/user.service/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
export class UserDetails {
  userData = signal<any>("");
  constructor(
    public user: UserService,
    public routes: ActivatedRoute,
    
  ) {
    effect(()=>{
      console.log(this.userData());
      
    })
  }
  ngOnInit() {
    const data = this.user.userList();
    this.routes.params.subscribe((params) => {
      const { name } = params;
      // console.log(name);

      const userDetails = data.filter((value, index) => value.name == name);
      // console.log(userDetails[0]);
      this.userData.set(userDetails[0])
    });
  }
}
