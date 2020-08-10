import { TodosStore } from './todos.store'
import { HttpClient } from '@angular/common/http'
import { Todo } from './todo.model'
import { Injectable } from '@angular/core'


@Injectable({ providedIn: 'root' })
export class TodosService {

  constructor(private store: TodosStore, private http: HttpClient) {
  }

  //   fetchTodos(): Observable<Todo[]> {
  //     return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=5')
  //         .pipe(tap(todos => this.todos = todos))
  // }

  async list(): Promise<void> {
    this.store.setLoading(true)
    const resp = await this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10').toPromise()
    this.store.set(resp)
    this.store.setLoading(false)
  }

  changeFilter(filter: string = 'all'): void{
    this.store.update({
      ui: {
        filter
      }
    })
  }

  onToggle(id: number): void{
    this.store.update(id, entity => {
      return {
        completed: !entity.completed
      }
    })
  }

  removeTodo(id: number): void {
    this.store.remove(id)
  }


  addTodo(todo: Todo): void {
    this.store.add(todo)
  }


}
