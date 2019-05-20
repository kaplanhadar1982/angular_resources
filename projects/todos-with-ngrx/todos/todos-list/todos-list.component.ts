import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {TodosService} from '../todos-service.service';
import * as TodoActions from '../store/todos.actions';
import {Todo} from '../todo.model';
import * as Reducer from '../../shared/app.reducers';
import * as TodoReducer from '../store/todos.reducers';


@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  todos : Observable<TodoReducer.TodoState>;
  //subscription: Subscription;

  constructor(private todosService:TodosService,private store:Store<Reducer.AppState>) { }

  ngOnInit() {
    this.todos = this.store.select('todosList');
  }
  
  onDeleteTodo(i :number)
  {
    this.store.dispatch(new TodoActions.DeleteTodo(i));
    //this.todosService.deleteTodo(i);
  }
}
