import { Injectable } from '@angular/core';
import { USERS } from '../../data/userData';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: any;

  setUser(user: any) {
    console.log(user);
    
    this.currentUser = user;
  }

  getRole() {
    return this.currentUser?.role;
  }
}
