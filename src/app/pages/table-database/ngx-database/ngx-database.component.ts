import { Component, OnInit, ViewEncapsulation, ViewChild } from "@angular/core";
import { ColumnMode, SortType } from "@swimlane/ngx-datatable";
@Component({
  selector: "app-ngx-database",
  templateUrl: "./ngx-database.component.html",
  styleUrls: ["./ngx-database.component.scss"],
})
export class NgxDatabaseComponent implements OnInit {
  rows = [];

  ColumnMode = ColumnMode;

  constructor() {}

  ngOnInit() {
    this.fetch((data) => {
      this.rows = data;
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open("GET", `assets/data/company.json`);

    req.onload = () => {
      const data = JSON.parse(req.response);
      cb(data);
    };

    req.send();
  }
}
