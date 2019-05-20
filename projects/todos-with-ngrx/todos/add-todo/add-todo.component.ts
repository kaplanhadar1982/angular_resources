import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import {Todo} from '../todo.model';
import {TodosService} from '../todos-service.service';
import * as TodoActions from '../store/todos.actions';
import * as Reducer from '../../shared/app.reducers';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  task = '';
  creator = '';

  constructor(private todosService:TodosService,private store:Store<Reducer.AppState>) { }

  ngOnInit() {
  }

  onAddTodo()
  {
    let todo = new Todo(this.task,this.creator);
    this.store.dispatch(new TodoActions.AddTodo(todo));
    //this.todosService.addTodo(todo);
  }
}
