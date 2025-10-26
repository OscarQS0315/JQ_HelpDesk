import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { TecnicoRoutingModule } from './tecnico-routing-module';
import { Listado } from './listado/listado';
import { Detalle } from './detalle/detalle';


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
