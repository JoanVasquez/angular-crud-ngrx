import { ActionReducerMap } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { PaginationInstance } from 'ngx-pagination';
import { RouterStateUrl } from './reducers/router.reducer';
import { TodoEffects } from './effects/todo.effects';
import { State as TodoState, todoReducer } from './reducers/todo.reducer';

export interface AppState {
  todo: TodoState;
  //pagination: PaginationInstance;
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<AppState> = {
  todo: todoReducer,
  //pagination: paginationReducer,
  router: fromRouter.routerReducer,
};

export const effects = [TodoEffects];
