import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

export interface Todo {
    id: number,
    title: string,
    completed: boolean
}

@Injectable({ providedIn: 'root' })
export class TodosService {
    constructor(private http: HttpClient) { }

    fetchTodos():Observable<Todo[]>{
        return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .pipe(tap(todos => this.todos = todos))
    }

    public todos: Todo[] = [
        { id: 1, title: "Something111", completed: false },
        { id: 2, title: "Something222", completed: false },
        { id: 3, title: "Something333", completed: true },
    ]

    onToggle(id: number) {
        const idx = this.todos.findIndex(t => t.id === id)
        this.todos[idx].completed = !this.todos[idx].completed
    }

    removeTodo(id:number){
        this.todos = this.todos.filter(t => t.id !== id)
    }
}