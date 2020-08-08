import { Component } from '@angular/core'
import { TodosService } from './state/todos.service'
import { TodosQuery } from './state/todos.query'
import { Observable } from 'rxjs'
import { Todo } from './state/todo.model'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private todosService: TodosService, private todosQuery: TodosQuery) {
    this.todosService.list()
  }

  todos$: Observable<Todo[]> = this.todosQuery.selectAll()
  loading$: Observable<boolean> = this.todosQuery.selectLoading()


}
