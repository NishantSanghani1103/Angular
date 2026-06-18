import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { form, FormField } from '@angular/forms/signals';
import { Counter } from './pages/counter/counter';
import { ProductList } from './pages/product/product-list/product-list';
interface registerFormType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: number;
  mobile: string;
  date: string;
  time: string;
  experience: number;
  country: string;
  skills: string[];
  gender: string;
  hobbies: Hobbies;
  file: string;
  search: string;
  website: string;
  address: string;
  color: string;
}
interface Hobbies {
  reading: boolean;
  sports: boolean;
  music: boolean;
  travel: boolean;
}
@Component({
  selector: 'app-root',
  imports: [FormField, Counter,ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('revision');

  registerModel = signal<registerFormType>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    age: 0,
    mobile: '',
    date: '',
    time: '',
    color: '',
    experience: 0,
    country: '',
    skills: [],
    gender: '',
    hobbies: {
      reading: false,
      sports: false,
      music: false,
      travel: false,
    },
    file: '',
    search: '',
    website: '',
    address: '',
  });

  registerForm = form(this.registerModel);

  registerData(event: SubmitEvent) {
    event.preventDefault();

    const formData = this.registerForm().value();

    const selectedHobbies = Object.entries(formData.hobbies)
      .filter(([_, selected]) => selected)
      .map(([name]) => name);

    // console.log('Form Data:', formData);
    // console.log('Selected Hobbies:', selectedHobbies);
    const finalData = {
      ...formData,
      hobbies: selectedHobbies,
    };

    console.log(finalData);
  }
}
