import { Component, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-getter-setter',
  imports: [FormsModule],
  templateUrl: './getter-setter.html',
  styleUrl: './getter-setter.css',
})
export class GetterSetter {
  userName = signal('Nishant');
  userDetails = signal({
    name: 'Nishant',
    email: 'ns@gmail.com',
    collage: 'Mu',
  });
  constructor() {
    effect(() => {
      console.log(this.userDetails());
      
    });
  }
  get uName() {
    return this.userName();
  }

  set uName(val: string) {
    this.userName.set(val);
  }

  get details(): any {
    return this.userDetails().collage;
  }

  set details(val: string) {
    console.log(val);
    
    this.userDetails.update((value) => ({
      ...value,
      collage: val,
    }));
  }
}
