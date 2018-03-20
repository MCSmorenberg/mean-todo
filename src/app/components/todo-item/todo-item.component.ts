import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../classes/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  // public todos = [];

  private todo: Todo;

  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    // this._todoService.getTodos()
    //   .subscribe(data => this.todos = data);
  }

  private removeTodo(): void {
    let index = this._todoService.getTodoIndex(this.todo);

    this._todoService.removeTodo(index);
  }

}
