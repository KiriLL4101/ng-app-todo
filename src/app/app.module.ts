import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { InputTextModule } from 'primeng/inputtext'
import { CheckboxModule } from 'primeng/checkbox'
import { ButtonModule } from 'primeng/button'
import { DropdownModule } from 'primeng/dropdown'

import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'
import { TodoListComponent } from './todo-list/todo-list.component'
import { AddTodoComponent } from './add-todo/add-todo.component'
import { HttpClientModule } from '@angular/common/http'
import { TodosFilterPipe } from './shared/todos-filter.pipe'
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service'
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools'
import { environment } from '../environments/environment'

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AddTodoComponent,
    TodosFilterPipe
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    FormsModule,
    HttpClientModule,
    DropdownModule,
    BrowserAnimationsModule,
    environment.production ? [] : AkitaNgDevtools.forRoot()
  ],
  providers: [{ provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' }}],
  bootstrap: [AppComponent]
})
export class AppModule { }
