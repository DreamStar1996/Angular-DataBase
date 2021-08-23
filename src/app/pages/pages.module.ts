import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const routes: Routes = [{ path: 'welcome', component: WelcomeComponent }];

@NgModule({
  declarations: [WelcomeComponent],
  imports: [RouterModule.forRoot(routes), CommonModule, NgxDatatableModule],
  exports: [RouterModule],
})
export class PagesModule {}
