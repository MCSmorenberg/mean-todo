import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  private todoText: string;
  // or public?

  constructor() {
    this.todoText = '';
  }

  ngOnInit() {
  }

  private addTodo(): void {
    // console.log(this.todoTe  xt);
    this.todoText = '';
  }

}
