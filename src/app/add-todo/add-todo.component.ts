import { Component, OnInit } from '@angular/core';
import { Todo, TodosService } from '../shared/todos.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  public title: string

  constructor(private todoService: TodosService) { }

  ngOnInit(): void {
  }

  addTodo() {
    if (this.title) {
      const todo: Todo = {
        title: this.title,
        id: Date.now(),
        completed: false
      }
      this.todoService.addTodo(todo)
      this.title = ''
    }
  }

}
