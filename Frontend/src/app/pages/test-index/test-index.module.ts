import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { FormListComponent } from "./form-list/form-list.component";

import { MatSelectModule } from "@angular/material/select";
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';

const routes: Routes = [
  {
    path: "form-test",
    component: FormListComponent,
  },
];

@NgModule({
  declarations: [FormListComponent],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    MatSelectModule,
    FormsModule,
    MatCardModule
  ],
  exports: [RouterModule],
})
export class TestIndexModule {}
