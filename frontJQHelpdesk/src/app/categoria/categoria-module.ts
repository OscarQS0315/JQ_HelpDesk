import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing-module';
import { ListadoCategoria } from './listado-categoria/listado-categoria';
import { DetalleCategoria } from './detalle-categoria/detalle-categoria';
import { FormsModule } from '@angular/forms';
import { BreadcrumbBackComponent } from '../share/components/breadcrumb-back/breadcrumb-back.component';
@NgModule({
  declarations: [
    ListadoCategoria,
    
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    FormsModule,
    BreadcrumbBackComponent,
    DetalleCategoria
  ]
})
export class CategoriaModule { }
