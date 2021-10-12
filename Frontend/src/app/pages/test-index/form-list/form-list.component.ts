import { Component, OnInit } from "@angular/core";

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-form-list",
  templateUrl: "./form-list.component.html",
  styleUrls: ["./form-list.component.scss"],
})
export class FormListComponent implements OnInit {
  FoodData = [];

  FoodStatus: string;
  HeadStatus: string;

  FoodValue: string;
  HeadValue: string;

  foods: Food[] = [
    { value: "steak-0", viewValue: "Steak" },
    { value: "pizza-1", viewValue: "Pizza" },
    { value: "tacos-2", viewValue: "Tacos" },
  ];

  constructor() {}

  ngOnInit() {}

  foodselect(value) {
    if (value == "SelectAll") {
      this.FoodData = this.mat();
      return;
    }
    if (value == "CancelAll") {
      this.FoodData = [];
      return;
    }
    debugger;
  }

  headselect(value){
    
  }

  mat() {
    let all = [];
    this.foods.forEach((x) => {
      all.push(x.value);
    });
    debugger;
    return all;
  }
  
}
