import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazzarComponent } from './lazzar/lazzar.component';

const APP_ROUTES: Routes = [
  {
    path: 'lazzarSolutions',
    component: LazzarComponent
  },
  { path: '**',
  pathMatch:'full',
  redirectTo: 'routePath' }

];

@NgModule({
  imports: [RouterModule.forChild(APP_ROUTES)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}

