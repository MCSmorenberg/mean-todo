import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Todo } from '../../classes/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() onRemove: EventEmitter<any> = new EventEmitter<any>();

  // private todo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  private removeTodo(): void {
    this.todoService.removeTodo(this.todo._id)
    .subscribe(
      response => {
        this.onRemove.emit(response);
      }
    )
    // let index = this.todoService.getTodoIndex(this.todo);
    // this.todoService.removeTodo(index);
  }

}
