import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { mergeMap, catchError, map } from 'rxjs/operators';
import * as fromTodoActions from '../actions/todo.action';
import { TodoService } from '../../services/todo/todo.service';

@Injectable({
  providedIn: 'root',
})
export class TodoEffects {
  constructor(private actions: Actions, private todoService: TodoService) {}

  @Effect()
  getTodos: Observable<Action> = this.actions.pipe(
    ofType<fromTodoActions.GetTodos>(fromTodoActions.TodoActionType.GET_TODOS),
    mergeMap(() =>
      this.todoService
        .getTodos()
        .pipe(map((todos) => new fromTodoActions.GetTodosSuccess(todos)))
    )
  );

  @Effect()
  addTodo: Observable<Action> = this.actions.pipe(
    ofType<fromTodoActions.AddTodo>(fromTodoActions.TodoActionType.ADD_TODO),
    map((action) => action.payload),
    mergeMap((todo) =>
      this.todoService
        .saveTodo(todo)
        .pipe(map((todo) => new fromTodoActions.AddTodoSuccess(todo)))
    )
  );

  @Effect()
  editTodo: Observable<Action> = this.actions.pipe(
    ofType<fromTodoActions.EditTodo>(fromTodoActions.TodoActionType.EDIT_TODO),
    map((action) => action.payload),
    mergeMap((category) =>
      this.todoService
        .updateTodo(category)
        .pipe(map((category) => new fromTodoActions.EditTodoSuccess(category)))
    )
  );
}
