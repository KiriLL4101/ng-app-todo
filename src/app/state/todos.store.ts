import { EntityState, EntityStore, StoreConfig } from '@datorama/akita'
import { Todo } from './todo.model'
import { Injectable } from '@angular/core'

export interface TodosState extends EntityState<Todo> {}


@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'todos'
})
export class TodosStore extends EntityStore<TodosState> {

  constructor() {
    super()
  }

}