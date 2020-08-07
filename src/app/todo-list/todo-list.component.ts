import { Component, OnInit } from '@angular/core';
import { TodosService } from '../shared/todos.service'
import { SelectItem } from 'primeng/api';



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public loading: boolean = true


  constructor(public todosService: TodosService) {
    this.cities = [
      { label: 'Все заметки', value: 'all' },
      { label: 'Активные', value: 'active' },
      { label: 'Завершенные', value: 'completed' }
    ];

   }

  cities: SelectItem[];


  selectedCity: string;


  ngOnInit() {
    this.todosService.fetchTodos().subscribe(() => {
      this.loading = false
    })
  }

  onChange(id: number) {
    this.todosService.onToggle(id)
  }

  removeTodo(id: number) {
    this.todosService.removeTodo(id)
  }

}
