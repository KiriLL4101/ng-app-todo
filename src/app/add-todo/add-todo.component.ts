import { Component } from '@angular/core';
import { TodosService } from '../state/todos.service';
import { Todo } from '../state/todo.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {

  public title: string

  constructor(private todoService: TodosService) { }


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
