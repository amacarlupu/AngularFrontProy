import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { LoginRoutingModule } from './login-route.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginLazzarComponent } from './components/login-lazzar/login-lazzar.component';


@NgModule({
  declarations: [
    LoginComponent,
    LoginLazzarComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    // LoginComponent,
    LoginLazzarComponent
  ],
  providers: [],
})
export class LoginModule {}
