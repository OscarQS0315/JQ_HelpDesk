import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { TecnicoRoutingModule } from './tecnico-routing-module';
import { Listado } from './listado/listado';
import { Detalle } from './detalle/detalle';
import { CommonModule } from '@angular/common';
import { BreadcrumbBackComponent } from '../share/components/breadcrumb-back/breadcrumb-back.component';
import { TranslocoModule } from '@jsverse/transloco';


@NgModule({
  declarations: [
    Listado,
  ],
  imports: [
    CommonModule,
    TecnicoRoutingModule,
    FormsModule,
    Detalle,
    BreadcrumbBackComponent,
    ReactiveFormsModule,
    TranslocoModule
  ],
  exports: [
  ]
})
export class TecnicoModule { }
