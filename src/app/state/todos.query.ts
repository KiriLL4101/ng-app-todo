import { QueryEntity } from '@datorama/akita'
import { TodosStore, TodosState } from './todos.store'
import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class TodosQuery extends QueryEntity<TodosState> {

  constructor(protected store: TodosStore) {
    super(store)
  }

}

