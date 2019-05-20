import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosListComponent } from './todos/todos-list/todos-list.component';
import { AddTodoComponent } from './todos/add-todo/add-todo.component';
import { TodoManagerComponent } from './todos/todo-manager/todo-manager.component';

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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
