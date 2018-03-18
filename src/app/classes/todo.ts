export class Todo {
  task: string;
  isCompleted: boolean;

  constructor(task: string, isCompleted: boolean) {
    this.task = task;
    this.isCompleted = isCompleted;
  }

  // The line below will do exactly the same as all the lines above.. = from ts
  // constructor(public task: string, public isCompleted: boolean) {
  // }
}
