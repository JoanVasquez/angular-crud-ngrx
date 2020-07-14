import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './todo/todo.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [TodoService],
})
export class ServicesModule {}
