import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  props as propsConfig,
  defaultValues,
  setData,
} from './todoform.config';
import { Todo } from '../../models/Todo';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from 'src/app/store';
import { Store, select } from '@ngrx/store';
import { getEntityById } from 'src/app/store/reducers/todo.reducer';
import { AddTodo, EditTodo } from 'src/app/store/actions/todo.action';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  props: any;
  data: FormGroup;
  todo: Todo = defaultValues;
  private id: string;
  @Output() saveOrUpdate: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.props = propsConfig;

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.store
        .pipe(select(getEntityById, { id: this.id }))
        .subscribe((todo) => {
          if (todo) this.data = this.fb.group(setData(todo));
        });
    } else {
      this.data = this.fb.group(setData(this.todo));
    }
  }

  onSubmit(): void {
    this.todo = this.data.value;
    if (this.todo.id) {
      this.store.dispatch(new EditTodo(this.todo));
    } else {
      this.store.dispatch(new AddTodo(this.todo));
    }
    this.router.navigateByUrl('home');
  }
}
