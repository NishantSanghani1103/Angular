import { Component, effect, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('toDoList');
  task = signal<string>('');
  taskList = signal<any[]>([]);
  constructor() {
    effect(() => {
      console.log(this.taskList());
    });
  }
  addTask() {
    if (this.task().length > 0) {
      this.taskList.update((value) => [
        ...value,
        { id: this.taskList().length, task: this.task() },
      ]);
      this.task.set('');
    } else {
      alert('Please Fill The Task First....!!');
    }
  }

  deleteTask(id: number) {
    if (confirm('Are You Want To Sure For Delete Task ? ')) {
      this.taskList.update((value) => value.filter((task,index) => index != id));
    }
  }
}
