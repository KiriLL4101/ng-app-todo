import { Todo } from './../shared/todos.service'
import { QueryEntity } from '@datorama/akita'
import { TodosStore, TodosState } from './todos.store'
import { Injectable } from '@angular/core'
import { combineLatest } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class TodosQuery extends QueryEntity<TodosState> {

  constructor(protected store: TodosStore) {
    super(store)
  }

  selectVisibilityFilter$ = this.select(state => state.ui.filter)

  selectVisibleTodos$ = combineLatest(
    this.selectVisibilityFilter$,
    this.selectAll(),
    this.getVisibleTodos
  )

  getVisibleTodos(filetrs, todos): Todo[] {
    switch (filetrs) {
      case 'active':
        return todos.filter(t => !t.completed)
      case 'completed':
        return todos.filter(t => t.completed)
      default:
        return todos
    }
  }

}

