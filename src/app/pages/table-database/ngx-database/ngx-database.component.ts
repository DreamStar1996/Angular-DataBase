import { Component, OnInit } from "@angular/core";
import { ColumnMode, SortType } from "@swimlane/ngx-datatable";
@Component({
  selector: "app-ngx-database",
  templateUrl: "./ngx-database.component.html",
  styleUrls: ["./ngx-database.component.scss"],
})
export class NgxDatabaseComponent implements OnInit {
  rows = [];

  columns = [{ name: "Company" }, { name: "Name" }, { name: "Gender" }];

  ColumnMode = ColumnMode;
  SortType = SortType;

  constructor() {
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

  ngOnInit() {}
}
