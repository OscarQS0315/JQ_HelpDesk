import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing-module';
import { ListadoCategoria } from './listado-categoria/listado-categoria';
import { DetalleCategoria } from './detalle-categoria/detalle-categoria';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListadoCategoria,
    DetalleCategoria
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    FormsModule
  ]
})
export class CategoriaModule { }
