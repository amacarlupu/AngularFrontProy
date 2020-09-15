import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazzarComponent } from './lazzar/lazzar.component';
import { PagesRoutingModule } from './pages-route.module';
import { SharedModule } from '../shared/shared.module';
import { NavEmpresaComponent } from './lazzar/nav-empresa/nav-empresa.component';

@NgModule({
  declarations: [
    LazzarComponent,
    NavEmpresaComponent
  ],
  imports: [
    PagesRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class PagesModule { }
