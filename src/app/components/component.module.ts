import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from './pagination/pagination.component';
import { DatatableComponent } from './datatable/datatable.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NavbarComponent } from './navbar/navbar.component';
//import { ReversePipe } from '../shared/reverse.pipe';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    FormComponent,
    PaginationComponent,
    DatatableComponent,
    NavbarComponent,
    //ReversePipe,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  exports: [FormComponent, DatatableComponent, NavbarComponent],
})
export class ComponentModule {}
