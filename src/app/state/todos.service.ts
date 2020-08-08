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



  // tslint:disable-next-line:typedef
  onToggle(id: number) {
    this.store.update(id, entity => {
      return {
        completed: !entity.completed
      }
    })
  }

  // tslint:disable-next-line:typedef
  removeTodo(id: number) {
    this.store.remove(id)
  }

  // tslint:disable-next-line:typedef
  addTodo(todo: Todo) {
    this.store.add(todo)
  }


}
