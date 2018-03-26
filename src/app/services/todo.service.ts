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
    return this.http.post('http://localhost:4000/api/todo/', todo);
  }

  public getTodos(): Observable<any> {
    return this.http.get('http://localhost:4000/api/todo');
  }

	public updateTodo(todo: any): Observable<any> {
    return this.http.put('http://localhost:4000/api/todo/' + todo._id, todo);
  }

  public removeTodo(id: string): Observable<any> {
    return this.http.delete('http://localhost:4000/api/todo/' + id);
  }

}
