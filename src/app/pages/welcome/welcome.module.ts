import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const routes: Routes = [{ path: '', component: WelcomeComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes), NgxDatatableModule],
  declarations: [WelcomeComponent],
  exports: [RouterModule],
})
export class WelcomeModule {}
