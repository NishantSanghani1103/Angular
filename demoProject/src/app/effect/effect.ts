import { Component, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-effect',
  imports: [],
  templateUrl: './effect.html',
  styleUrl: './effect.css',
})
export class Effect {
  speed = signal(0);
  textColor: string = 'green';

  // for the dataTypes In Signals

  userList = signal<string[]>(['ns', 'sj']);
  counterSignal: WritableSignal<number | string> = signal(0);

  constructor() {
    effect(() => {
      console.log(this.userList());

      console.log('Counter Data Type Signal : ', this.counterSignal());
    });

    effect(() => {
      if (this.speed() <= 50) {
        this.textColor = 'green';
      }
      if (this.speed() > 50 && this.speed() <= 80) {
        this.textColor = 'yellow';
      } else if (this.speed() > 80) {
        this.textColor = 'red';
      }
      // console.log('Speed Is : ', this.speed());
      // console.log('Color Is : ', this.textColor);
    });
  }

  handleSpeed() {
    this.speed() >= 120 ? this.speed.set(0) : this.speed.update((value) => value + 10);
  }
  handleCounterSignal() {
    this.counterSignal.set('nishant');
  }
  handleAddUser(event: any) {
    console.log(event.target.value);
    
    this.userList.update((value) => [...value, event.target.value]);
  }
}
