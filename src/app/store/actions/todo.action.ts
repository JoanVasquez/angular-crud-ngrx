import { Action } from '@ngrx/store';

export enum TodoActionType {
  ADD_TODO = '[TODO] Add Todo',
  ADD_TODO_SUCCESS = '[TODO] Add Todo Success',
  EDIT_TODO = '[TODO] Edit Todo',
  EDIT_TODO_SUCCESS = '[TODO] Edit Todo Success',
  DELETE_TODO = '[TODO] Delete Todo',
  DELETE_TODO_SUCCESS = '[TODO] Delete Todo Success',
  GET_TODOS = '[TODO] Get Todos',
  GET_TODOS_SUCCESS = '[TODO] Get Todos Success',
}

export class AddTodo implements Action {
  readonly type = TodoActionType.ADD_TODO;
  constructor(public payload: any) {}
}

export class AddTodoSuccess implements Action {
  readonly type = TodoActionType.ADD_TODO_SUCCESS;
  constructor(public payload: any) {}
}

export class EditTodo implements Action {
  readonly type = TodoActionType.EDIT_TODO;
  constructor(public payload: any) {}
}

export class EditTodoSuccess implements Action {
  readonly type = TodoActionType.EDIT_TODO_SUCCESS;
  constructor(public payload: any) {}
}

export class DeleteTodo implements Action {
  readonly type = TodoActionType.DELETE_TODO;
  constructor(public payload: any) {}
}

export class DeleteTodoSuccess implements Action {
  readonly type = TodoActionType.DELETE_TODO_SUCCESS;
  constructor(public payload: any) {}
}

export class GetTodos implements Action {
  readonly type = TodoActionType.GET_TODOS;
  constructor() {}
}

export class GetTodosSuccess implements Action {
  readonly type = TodoActionType.GET_TODOS_SUCCESS;
  constructor(public payload: any) {}
}

export type TodoActions =
  | AddTodo
  | AddTodoSuccess
  | EditTodo
  | EditTodoSuccess
  | DeleteTodo
  | DeleteTodoSuccess
  | GetTodos
  | GetTodosSuccess;
