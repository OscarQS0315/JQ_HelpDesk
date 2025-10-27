import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms";

import { TecnicoRoutingModule } from './tecnico-routing-module';
import { Listado } from './listado/listado';
import { Detalle } from './detalle/detalle';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    Listado,
    Detalle
  ],
  imports: [
    CommonModule,
    TecnicoRoutingModule,
    FormsModule
  ]
})
export class TecnicoModule { }
