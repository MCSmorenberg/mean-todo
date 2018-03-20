// import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private todoService: TodoService) {
  }
  todos = [];
  // title = 'MEAN ToDo';

  ngOnInit() {
    this.todoService.getTodos()
    .subscribe(
      data => { this.todos = data },
      err => console.error(err),
      () => console.log('done loading todos')
      // No error or completion callbacks here. They are optional, but
      // you will get console errors if the Observable is in an error state.
    );
  }
}
