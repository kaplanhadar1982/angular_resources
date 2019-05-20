import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import {Todo} from '../todo';
import {TodosService} from '../todos-service.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  todos : Array<Todo> = [];
  subscription: Subscription;

  constructor(private todosService:TodosService) { }

  ngOnInit() {
    this.subscription = this.todosService.todosChanged
      .subscribe(
        (todos: Todo[]) => {
          this.todos = todos;
        }
      );
    this.todos = this.todosService.getTodos();
  }
  
  onDeleteTodo(i :number)
  {
    this.todosService.deleteTodo(i);
  }
}
