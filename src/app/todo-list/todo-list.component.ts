import { Component, OnInit } from '@angular/core';
import { TodosService } from '../shared/todos.service'



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public loading: boolean = true

  private newTodo: string

  constructor(public todosService: TodosService) { }

  ngOnInit() {
    this.todosService.fetchTodos().subscribe(() => {
      this.loading = false
    })
  }

  onChange(id: number) {
    this.todosService.onToggle(id)
  }

  removeTodo(id: number) {
    this.todosService.removeTodo(id)
  }

}
