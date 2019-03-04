import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TableRow } from './table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input()
  tableData: TableRow[];

  @Output()
  idEmitter = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  emitId(id: number): void {
    this.idEmitter.emit(id);
  }
}
