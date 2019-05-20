import * as TodoActions from './todos.actions';

import { Todo } from '../todo.model';

// export interface AppState{
//   todosList : TodoState
// }

export interface TodoState{
  todos: Todo[]
} 

const initialState : TodoState = {
  todos: [
    new Todo('Apples', 'hadar'),
    new Todo('Tomatoes', 'kaplan')
  ]
};

export function todoReducer(state = initialState, action: TodoActions.TodoActions) {
  switch (action.type) {
    case TodoActions.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case TodoActions.DELETE_TODO:
      const oldTodos = [...state.todos];
      oldTodos.splice(action.payload, 1);
      return {
        ...state,
        todos: oldTodos
      };
    default:
      return state;
  }
}