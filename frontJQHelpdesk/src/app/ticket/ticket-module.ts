import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { TicketRoutingModule } from './ticket-routing-module';
import { ListadoTicket } from './listado-ticket/listado-ticket';
import { DetalleTicket } from './detalle-ticket/detalle-ticket';
import { A11yModule } from "@angular/cdk/a11y";
import { VisualizacionTicket } from './visualizacion-ticket/visualizacion-ticket';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    TicketRoutingModule,
    ReactiveFormsModule,
    A11yModule,
    ListadoTicket,
    DetalleTicket,
    VisualizacionTicket
],
  exports: [
  ]
})
export class TicketModule { }
