import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { NgxDatabaseComponent } from './ngx-database/ngx-database.component';
import { ZorroDatabaseComponent } from './zorro-database/zorro-database.component';
import { NgDatabaseComponent } from './ng-database/ng-database.component';

const routes: Routes = [
  {
    path: 'ngx-database',
    component: NgxDatabaseComponent,
  },
  {
    path: 'zorro-database',
    component: ZorroDatabaseComponent,
  },
  {
    path: 'ng-database',
    component: NgDatabaseComponent,
  },
];

@NgModule({
  declarations: [
    NgxDatabaseComponent,
    ZorroDatabaseComponent,
    NgDatabaseComponent,
  ],
  imports: [RouterModule.forRoot(routes), CommonModule, NgxDatatableModule],
  exports: [RouterModule],
})
export class TableDatabaseModule {}
