import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { HomeRoutingModule } from './home-routing-module';
import { Inicio } from './inicio/inicio';
import { AcercaDe } from './acerca-de/acerca-de';
import { Login } from './login/login';



@NgModule({
  declarations: [
    Inicio,
    AcercaDe,
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    Login
  ],
  exports: [
  ]
})
export class HomeModule { }
