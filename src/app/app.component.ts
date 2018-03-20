// import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private todoService: TodoService) {}
  // title = 'MEAN ToDo';

  // ngOnInit() {
  //   this.todoService.getTodos()
  //   .subscribe(
  //     data => {
  //       console.log('data: ', data);
  //     }
  //     // No error or completion callbacks here. They are optional, but
  //     // you will get console errors if the Observable is in an error state.
  //   );
  // }
}
