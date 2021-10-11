import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { FormListComponent } from "./form-list/form-list.component";

import { MatSelectModule } from "@angular/material/select";

const routes: Routes = [
  {
    path: "form-test",
    component: FormListComponent,
  },
];

@NgModule({
  declarations: [FormListComponent],
  imports: [RouterModule.forRoot(routes), CommonModule, MatSelectModule],
  exports: [RouterModule],
})
export class TestIndexModule {}