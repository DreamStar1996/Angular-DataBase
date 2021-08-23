import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
];

@NgModule({
  declarations: [WelcomeComponent],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class PagesModule {}
