import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';

@Injectable()
export class TodoService {

  private todos: Todo[];
  private nextId: number;

  constructor() {
    this.todos = [
      new Todo(0, "Learn to make an Angular app!"),
      new Todo(1, "Send my phone to Samsung."),
      new Todo(2, "Call the garage to ask why my car is not done.")
    ];

    this.nextId = 3;
  }

  public addTodo(text: string): void {
    let todo = new Todo(this.nextId, text);
    this.todos.push(todo);
    this.nextId++;
  }

  public getTodos(): Todo[] {
    return this.todos;
  }

  public removeTodo(id: number): void {
    debugger;
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

}
