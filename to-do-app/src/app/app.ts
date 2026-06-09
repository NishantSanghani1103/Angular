import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('to-do-app');
  taskValue = signal<string>('');
  taskList = signal<string[]>(JSON.parse(localStorage.getItem('TASK') || '[]'));
  editIndex = signal<number | null>(null);
  constructor() {
    effect(() => {
      console.log(this.taskList());
    });
  }
  handleChange(event: any) {
    // console.log(event.target.value);
    this.taskValue.set(event.target.value);
  }

  saveTask() {
    if (this.taskValue()) {
      const checkTask = this.taskList().find((value, index) => value == this.taskValue());
      console.log(checkTask);
      if (checkTask) {
        return alert('Task Already Exists...');
      }
      if (this.editIndex()) {
        this.taskList.update((value) =>
          value.map((value, ind) => (ind == this.editIndex() ? this.taskValue() : value)),
        );

        this.editIndex.set(null);
      } else {
        this.taskList.update((value) => [...value, this.taskValue()]);
      }
      this.taskValue.set('');

      localStorage.setItem('TASK', JSON.stringify(this.taskList()));
    } else {
      alert('Please Fill The Task First...!!');
    }
  }

  deleteTask(index: number) {
    if (confirm('Are You Want To Sure Delete Task ? ')) {
      this.taskList.update((value) => value.filter((item, ind) => ind != index));
      localStorage.setItem('TASK', JSON.stringify(this.taskList()));
    }
  }

  editTask(index: number) {
    this.taskValue.set(this.taskList()[index]);
    this.editIndex.set(index);
  }
}
