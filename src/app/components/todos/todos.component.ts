import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  inputTodo: string = '';

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        content: 'first todo',
        completed: false,
      },
      {
        content: 'second todo',
        completed: false,
      },
      {
        content: 'third todo',
        completed: false,
      },
    ];
  }

  toggleDone(id: number) {
    this.todos.map((todo, i) => {
      if (i === id) todo.completed = !todo.completed;
      return todo;
    });
  }

  removeTodo(id: number) {
    this.todos.splice(id, 1);
  }

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    });
    this.inputTodo = '';
  }
}
