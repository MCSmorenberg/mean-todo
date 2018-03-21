export class Todo {
  isCompleted: boolean;
  task: string;

  constructor(task: string, isCompleted: boolean) {
    this.isCompleted = isCompleted;
    this.task = task;
  }

  // The line below will do exactly the same as all the lines above.. = from ts
  // constructor(public task: string, public isCompleted: boolean) {
  // }
}
