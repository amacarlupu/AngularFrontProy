import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const APP_ROUTES: Routes  = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent  },
  { path: '**', pathMatch:'full', redirectTo: 'login' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
