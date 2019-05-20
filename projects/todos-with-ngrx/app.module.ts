import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule} from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosListComponent } from './todos/todos-list/todos-list.component';
import { AddTodoComponent } from './todos/add-todo/add-todo.component';
import { TodoManagerComponent } from './todos/todo-manager/todo-manager.component';
import { reducers } from './shared/app.reducers';


@NgModule({
  declarations: [
    AppComponent,
    TodosListComponent,
    AddTodoComponent,
    TodoManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
