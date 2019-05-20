import { ActionReducerMap } from '@ngrx/store';

import * as todoReducer from '../todos/store/todos.reducers';

export interface AppState {
    todosList: todoReducer.TodoState
}

export const reducers: ActionReducerMap<AppState> = {
    todosList: todoReducer.todoReducer
};