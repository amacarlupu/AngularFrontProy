import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/AuthService.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    AuthService
  ]
})
export class CoreModule { }
