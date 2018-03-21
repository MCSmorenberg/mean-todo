import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Todo } from './classes/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  private todos: Todo[];
  private apiTodos: Todo[];

  constructor(private todoService: TodoService) {
    this.todos = [
      new Todo("Learn to make an Angular app!", false),
      new Todo("Send my phone to Samsung.", false),
      new Todo("Call the garage to ask why my car is not done.", false)
    ];
  }

  ngOnInit() {
    this.todoService.getTodos()
    .subscribe(
      data => {
        this.apiTodos = data;
        this.todos = this.todos.concat(this.apiTodos);
      },
      err => console.error(err),
      () => console.log('done loading todos')
      // No error or completion callbacks here. They are optional, but
      // you will get console errors if the Observable is in an error state.
    );
  }

}
