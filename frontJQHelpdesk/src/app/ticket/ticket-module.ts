import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { TicketRoutingModule } from './ticket-routing-module';
import { ListadoTicket } from './listado-ticket/listado-ticket';
import { DetalleTicket } from './detalle-ticket/detalle-ticket';


@NgModule({
  declarations: [
    ListadoTicket,
    DetalleTicket
  ],
  imports: [
    CommonModule,
    TicketRoutingModule,
    ReactiveFormsModule
  ]
})
export class TicketModule { }
