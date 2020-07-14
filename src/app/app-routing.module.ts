import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoFormComponent } from './views/todo-form/todo-form.component';
import { TodoListComponent } from './views/todo-list/todo-list.component';

const routes: Routes = [
  { path: 'home', component: TodoListComponent },
  { path: 'new', component: TodoFormComponent },
  { path: 'edit/:id', component: TodoFormComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
