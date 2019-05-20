import { Component, OnInit } from '@angular/core';

import {TodosService} from '../todos-service.service';

@Component({
  selector: 'app-todo-manager',
  templateUrl: './todo-manager.component.html',
  styleUrls: ['./todo-manager.component.css'],
  providers:[TodosService]
})
export class TodoManagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
