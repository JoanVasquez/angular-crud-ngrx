import { Component, OnInit, Input } from '@angular/core';
import { headerTable } from './todo.list.config';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { getTodos } from 'src/app/store/reducers/todo.reducer';
import { AppState } from 'src/app/store';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: Observable<any>;
  headerTable: object;
  private id: string;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.headerTable = headerTable;
    this.todos = this.store.pipe(select(getTodos));
  }
}
