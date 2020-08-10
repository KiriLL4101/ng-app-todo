import { Component, Input } from '@angular/core'

import { Todo } from '../state/todo.model'
import { TodosService } from '../state/todos.service'



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  constructor(public todosService: TodosService) {}

  @Input() todos: Todo[]
  @Input() loading: boolean


  // ngOnInit() {
  //   // this.todosService.fetchTodos().subscribe(() => {
  //   //   this.loading = false
  //   // })
  // }

  // onChange(id: number) {
  //   this.todosService.onToggle(id)
  // }


}
