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

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    // this.todoService.getTodos()
    //   .subscribe(data => this.todos = data);
  }

  private removeTodo(): void {
    let index = this.todoService.getTodoIndex(this.todo);

    this.todoService.removeTodo(index);
  }

}
