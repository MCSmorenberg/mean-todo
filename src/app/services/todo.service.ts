import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';

@Injectable()
export class TodoService {

  private todos: Todo[];

  constructor() {
    this.todos = [
      new Todo("Learn to make an Angular app!", false),
      new Todo("Send my phone to Samsung.", false),
      new Todo("Call the garage to ask why my car is not done.", false)
    ];

  }

  public addTodo(task: string, isCompleted: boolean): void {
    let todo = new Todo(task, isCompleted);
    this.todos.push(todo);
  }

  public getTodos(): Todo[] {
    return this.todos;
  }

  public getTodoIndex(todo): number {
    let index = this.todos.indexOf(todo);

    return index;
  }

  public removeTodo(index: number): void {
    this.todos.splice(index, 1);
  }

}
