import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  createEntityAdapter,
  EntityAdapter,
  EntityState,
  Dictionary,
} from '@ngrx/entity';

import { TodoActionType, TodoActions } from '../actions/todo.action';
import { Todo } from '../../models/Todo';

export interface State extends EntityState<Todo> {
  isSuccess: boolean;
  loading: boolean;
  selectedTodoId: number;
}

export const adapter: EntityAdapter<Todo> = createEntityAdapter();

const initialState: State = adapter.getInitialState({
  isSuccess: false,
  loading: false,
  selectedTodoId: null,
});

export const todoReducer: (state: State, action: TodoActions) => State = (
  state = initialState,
  action: TodoActions
) => {
  switch (action.type) {
    case TodoActionType.ADD_TODO:
      return { ...state, loading: true };

    case TodoActionType.ADD_TODO_SUCCESS:
      state = { ...state, isSuccess: true, loading: false };
      return adapter.addOne(action.payload, state);

    case TodoActionType.EDIT_TODO:
      return { ...state, loading: true };

    case TodoActionType.EDIT_TODO_SUCCESS:
      state = { ...state, isSuccess: true, loading: false };
      return adapter.updateOne(
        { id: action.payload.id, changes: action.payload },
        state
      );

    case TodoActionType.GET_TODOS:
      return { ...state, loading: true };

    case TodoActionType.GET_TODOS_SUCCESS:
      state = { ...state, loading: false };
      return adapter.addMany(action.payload, state);

    default:
      return state;
  }
};

const getTodoFeautureState = createFeatureSelector<State>('todo');

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const getTodoEntities = createSelector(
  getTodoFeautureState,
  selectEntities
);

export const getTodos = createSelector(getTodoFeautureState, selectAll);

export const isSuccess = createSelector(
  getTodoFeautureState,
  (state: State) => state.isSuccess
);

export const isLoading = createSelector(
  getTodoFeautureState,
  (state: State) => state.loading
);

export const getEntityById = createSelector(
  getTodoEntities,
  (entities: Dictionary<Todo>, props: { id: string }) => entities[props.id]
);
