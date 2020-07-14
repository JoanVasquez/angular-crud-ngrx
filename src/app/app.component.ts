import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './store';
import { getTodos, isLoading, isSuccess } from './store/reducers/todo.reducer';
import { Observable } from 'rxjs';
import { Todo } from './models/Todo';
import { GetTodos, AddTodo, EditTodo } from './store/actions/todo.action';
import { Title } from '@angular/platform-browser';
//import { GetTodos } from './store/actions/todo.action'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  data: Observable<Todo[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    //this.store.dispatch(new AddTodo(todo));

    this.store.dispatch(new GetTodos());
    /*this.store.dispatch(new EditTodo(todo));
    this.data = this.store.pipe(select(getTodos));
    //console.log('test');
    this.data.subscribe((res) => console.log(res));*/
  }
}
