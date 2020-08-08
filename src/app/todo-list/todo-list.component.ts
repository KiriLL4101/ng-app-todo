import { Component, Input } from '@angular/core'
import { SelectItem } from 'primeng/api'
import { Todo } from '../state/todo.model'
import { TodosService } from '../state/todos.service'



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  constructor(public todosService: TodosService) {

    this.cities = [
      { label: 'Все заметки', value: 'all' },
      { label: 'Активные', value: 'active' },
      { label: 'Завершенные', value: 'completed' }
    ]

  }

  @Input() todos: Todo[]
  @Input() loading: boolean

  cities: SelectItem[]


  selectedCity: string


  // ngOnInit() {
  //   // this.todosService.fetchTodos().subscribe(() => {
  //   //   this.loading = false
  //   // })
  // }

  // onChange(id: number) {
  //   this.todosService.onToggle(id)
  // }


}
