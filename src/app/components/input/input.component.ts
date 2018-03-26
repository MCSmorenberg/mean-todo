import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent implements OnInit {

  @Output() onAdded: EventEmitter<any> = new EventEmitter<string>();

  private todoText: string;

  constructor(private todoService: TodoService) {
    this.todoText = '';
  }

  ngOnInit() {
  }

  private addTodo(): void {
    this.todoService.addTodo(this.todoText, false)
    .subscribe(
      response => {
        // Emit an event `reload list` to the Todo List
        this.onAdded.emit(response)
      },
      err => console.error(err)
    );

    this.todoText = '';
  }

}
