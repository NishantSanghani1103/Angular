import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userList = signal([
    {
      id: '1',
      name: 'nishant',
      email: 'ns@gmal.com',
    },
    {
      id: '1',
      name: 'ram',
      email: 'ram@gmal.com',
    },
    {
      id: '1',
      name: 'sanghani',
      email: 'sanghani@gmal.com',
    },
    {
      id: '4',
      name: 'karan',
      email: 'karan@gmal.com',
    },
  ]);
}
