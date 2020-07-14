import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  @Input() props: any;
  @Input() data: FormGroup;
  @Output() filterSubmit: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}
  ngOnInit(): void {}

  onSubmit(): void {
    this.filterSubmit.emit();
    this.data.reset();
  }

  onReset(): void {
    this.data.reset();
  }
}
