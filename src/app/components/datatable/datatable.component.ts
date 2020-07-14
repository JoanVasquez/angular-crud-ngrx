import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { PaginationInstance } from 'ngx-pagination';
import { paginationInstance } from './pagination.config';
import { Observable } from 'rxjs';

@Component({
  selector: 'datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
})
export class DatatableComponent implements OnInit {
  private objectKeys = Object.keys;
  private objectValues = Object.values;
  @Input() data: Observable<any>;
  @Input() action: boolean;
  @Input() headerTable: object;
  @Input() updatePath;

  paginationConfig: PaginationInstance;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.paginationConfig = paginationInstance;
  }

  onEdit(id: number): void {
    this.router.navigateByUrl(`${this.updatePath}/${id}`);
  }
}
