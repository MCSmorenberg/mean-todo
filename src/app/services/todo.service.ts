import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { pipe } from 'rxjs/util/pipe';
// import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/observable';
// import { ajax } from 'rxjs/observable/dom/ajax';
// import { map, catchError } from 'rxjs/operators';
// import * as Rx from "rxjs/Rx";
import { Todo } from '../classes/todo';

@Injectable()
export class TodoService {

  private todos: Todo[];

  constructor(private http: HttpClient) {
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

  private extractData(res: Response) {
    return res.text() ? res.json() : {}; ;
}

  public getTodos(): Observable<Todo[]> {

    let apiTodos = [];

    this.http.get('http://localhost:4000/api/todo')
    // this.http.get('http://localhost:4000/api/todo')
      .subscribe(
        data => { this.todos = data }),
        err => console.error(err),
        () => console.log('done loading..')
      );

      return this.todos;

    // .map(res => {
    //     return res.json().results.map(item => {
    //       return new Todo(
    //           item.isCompleted,
    //           item.task
    //       );
    //     });
    //   });

  }

  public getTodoIndex(todo): number {
    return this.todos.indexOf(todo);
  }

  public removeTodo(index: number): void {
    this.todos.splice(index, 1);
  }

}
