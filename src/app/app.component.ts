import { Component, OnInit } from '@angular/core'
import { TodosService } from './state/todos.service'
import { TodosQuery } from './state/todos.query'
import { Observable } from 'rxjs'
import { Todo } from './state/todo.model'
import { SelectItem } from 'primeng/api'
import { FormControl } from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private todosService: TodosService, private todosQuery: TodosQuery) {
    this.todosService.list()
  }

  todos$
  selectedNotes: string
  notes: SelectItem[] = [
    { label: 'Все заметки', value: 'all' },
    { label: 'Активные', value: 'active' },
    { label: 'Завершенные', value: 'completed' }
  ]

  control: FormControl

  ngOnInit(): void{
    this.todos$ = this.todosQuery.selectVisibleTodos$
    this.control = new FormControl()
  }

  loading$: Observable<boolean> = this.todosQuery.selectLoading()


  onChangeFilter(selectFilter): void{
    console.log(selectFilter.value)
    this.todosService.changeFilter(selectFilter.value)
  }

}
