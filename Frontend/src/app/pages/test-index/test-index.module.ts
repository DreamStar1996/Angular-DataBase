import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { FormListComponent } from "./form-list/form-list.component";

import { MatSelectModule } from "@angular/material/select";
import { FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { ApiTestComponent } from './api-test/api-test.component';

const routes: Routes = [
  {
    path: "form-test",
    component: FormListComponent,
  },
];

@NgModule({
  declarations: [FormListComponent, ApiTestComponent],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    MatSelectModule,
    FormsModule,
    MatCardModule,
    MatButtonToggleModule
  ],
  exports: [RouterModule],
})
export class TestIndexModule {}
