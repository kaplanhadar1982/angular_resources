import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo';

import {TodosService} from '../todos-service.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  task = '';
  creator = '';

  constructor(private todosService:TodosService) { }

  ngOnInit() {
    
  }

  onAddTodo()
  {
    let todo = new Todo(this.task,this.creator);
    this.todosService.addTodo(todo);
  }
}
