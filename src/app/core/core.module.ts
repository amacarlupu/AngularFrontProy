import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/AuthService.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { ModuloService } from './services/modulos.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    AuthService,
    TokenInterceptorService,
    ModuloService
  ]
})
export class CoreModule { }
