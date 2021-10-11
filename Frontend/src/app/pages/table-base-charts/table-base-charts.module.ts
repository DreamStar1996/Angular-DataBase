import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { MatGridListModule } from "@angular/material/grid-list";

import { NgxChartsComponent } from "./ngx-charts/ngx-charts.component";
import { NgChartsComponent } from "./ng-charts/ng-charts.component";
import { ZorroChartsComponent } from "./zorro-charts/zorro-charts.component";

const routes: Routes = [
  {
    path: "ngx-charts",
    component: NgxChartsComponent,
  },
  {
    path: "zorro-charts",
    component: ZorroChartsComponent,
  },
  {
    path: "ng-charts",
    component: NgChartsComponent,
  },
];

@NgModule({
  declarations: [NgxChartsComponent, NgChartsComponent, ZorroChartsComponent],
  imports: [RouterModule.forRoot(routes), CommonModule, MatGridListModule],
  exports: [RouterModule],
})
export class TableBaseChartsModule {}
