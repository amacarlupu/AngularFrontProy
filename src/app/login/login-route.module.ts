import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { LoginLazzarComponent } from './components/login-lazzar/login-lazzar.component';


const APP_ROUTES: Routes = [
  { path: '',
    component: LoginComponent
  },
  {
    path:'abcdef',
    component: LoginLazzarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(APP_ROUTES)],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
