import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoTicket } from './listado-ticket/listado-ticket';
import { DetalleTicket } from './detalle-ticket/detalle-ticket';
import { VisualizacionTicket } from './visualizacion-ticket/visualizacion-ticket';

const routes: Routes = [
  {path:'ListadoTicket', component: ListadoTicket},
  {path:'DetalleTicket/:Title', component: DetalleTicket},
  {path:'VisualizacionTicket', component: VisualizacionTicket}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule { }
