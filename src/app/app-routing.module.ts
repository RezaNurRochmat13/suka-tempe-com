import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TempeContentLandingComponent } from './tempe-content-landing/tempe-content-landing.component';

const routes: Routes = [
  { path: '', component: TempeContentLandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
