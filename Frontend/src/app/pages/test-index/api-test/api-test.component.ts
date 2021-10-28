import { Component, OnInit } from "@angular/core";
import { TestIndexService } from "../test-index.service";

export class FilterElement {
  currentUserGID = "";
}
@Component({
  selector: "app-api-test",
  templateUrl: "./api-test.component.html",
  styleUrls: ["./api-test.component.scss"],
})
export class ApiTestComponent implements OnInit {
  // dataSet = [
  //   {
  //     key: "1",
  //     name: "John Brown",
  //     age: 32,
  //     address: "New York No. 1 Lake Park",
  //   },
  //   {
  //     key: "2",
  //     name: "Jim Green",
  //     age: 42,
  //     address: "London No. 1 Lake Park",
  //   },
  //   {
  //     key: "3",
  //     name: "Joe Black",
  //     age: 32,
  //     address: "Sidney No. 1 Lake Park",
  //   },
  // ];

  dataSet: any[] = [];

  tabledata: FilterElement = new FilterElement();

  constructor(private db: TestIndexService) {}

  ngOnInit() {
    this.tabledata.currentUserGID = "7000020126";
    this.db.getReportMenu(this.tabledata).subscribe((x) => {
      this.dataSet = x.data;
    });
  }
}
