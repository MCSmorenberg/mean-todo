export class Todo {
  task: string;
  isCompleted: boolean;

  constructor(task: string, isCompleted: boolean) {
    this.task = task;
    this.isCompleted = isCompleted;
  }
}
