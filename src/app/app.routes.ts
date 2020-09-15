import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';



const APP_ROUTES: Routes = [
  {
    path:'login',
    loadChildren:()=> import('./login/login.module').then(m=>m.LoginModule)
  },
  {
    path:'home',
    loadChildren:()=> import('./home/home.module').then(m=>m.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path:'now',
    loadChildren:()=> import('./pages/pages.module').then(m=>m.PagesModule)
  }
  // {
  //   path: '**',
  //   pathMatch: 'full',
  //   redirectTo: 'login'
  // },
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'login'
  // }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
