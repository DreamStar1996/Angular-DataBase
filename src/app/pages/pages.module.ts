import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxDatabaseComponent } from './ngx-database/ngx-database.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/ngx-database' },
  {
    path: 'ngx-database',
    component: NgxDatabaseComponent,
  },
];

@NgModule({
  declarations: [NgxDatabaseComponent],
  imports: [RouterModule.forRoot(routes), CommonModule, NgxDatatableModule],
  exports: [RouterModule],
})
export class PagesModule { }
