import { Component, OnInit } from '@angular/core';
import { ColumnMode, SortType } from '@swimlane/ngx-datatable';
@Component({
  selector: 'app-ngx-database',
  templateUrl: './ngx-database.component.html',
  styleUrls: ['./ngx-database.component.scss'],
})
export class NgxDatabaseComponent implements OnInit {
  rows = [];

  columns = [{ name: 'Company' }, { name: 'Name' }, { name: 'Gender' }];

  ColumnMode = ColumnMode;
  SortType = SortType;

  constructor() {}

  ngOnInit(): void {}
}
