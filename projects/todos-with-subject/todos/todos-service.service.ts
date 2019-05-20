import { Subject } from 'rxjs';
import {Todo} from './todo';

export class TodosService {
  todosChanged = new Subject<Todo[]>();

  private todos: Todo[] = [
    new Todo("wash the car","hadar"),
    new Todo("learn angular","rotem")
  ];

  addTodo(todo: Todo) {
    this.todos.push(todo);
    this.todosChanged.next(this.todos.slice());
  }

  getTodos(){
      return this.todos.slice();
  }

  deleteTodo(todoIndex: number) {
    this.todos.splice(todoIndex,1);
    this.todosChanged.next(this.todos.slice());
  }
}