import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CardModuloComponent } from './components/card-modulo/card-modulo.component';

@NgModule({
  declarations: [
    NavbarComponent,
    CardModuloComponent
  ],
  exports:[
    NavbarComponent,
    CardModuloComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
