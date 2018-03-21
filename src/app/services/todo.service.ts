import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { Todo } from '../classes/todo';

@Injectable()
export class TodoService {

  private todos: Todo[];

  constructor(private http: HttpClient) {}

  public addTodo(task: string, isCompleted: boolean): Observable<any> {
    let todo = new Todo(task, isCompleted);
    // httpOptions? --> https://angular.io/guide/http#adding-headers
    return this.http.post('http://localhost:4000/api/todo', todo);
  }

  public getTodos(): Observable<any> {
    return this.http.get('http://localhost:4000/api/todo');
  }

  public getTodoIndex(todo): number {
    return this.todos.indexOf(todo);
  }

  public removeTodo(index: number): void {
    this.todos.splice(index, 1);
  }

}
