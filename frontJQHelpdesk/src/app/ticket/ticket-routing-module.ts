import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoTicket } from './listado-ticket/listado-ticket';
import { DetalleTicket } from './detalle-ticket/detalle-ticket';
import { VisualizacionTicket } from './visualizacion-ticket/visualizacion-ticket';
import { CreateUpdateTicket } from './create-update-ticket/create-update-ticket';
import { Asignaciones } from './asignaciones/asignaciones';

const routes: Routes = [
  {path:'ListadoTicket', component: ListadoTicket},
  {path:'DetalleTicket/:id', component: DetalleTicket},
  {path:'VisualizacionTicket', component: VisualizacionTicket},
  {path:'CreateUpdateTicket', component: CreateUpdateTicket},
  {path:'AsignacionesTicket', component: Asignaciones},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule { }
