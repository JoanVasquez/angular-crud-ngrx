import { Component, OnInit, Input } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() paginationConfig: PaginationInstance;

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('test');
    console.log(this.paginationConfig);
  }
}
