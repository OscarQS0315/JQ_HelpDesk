import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoTicket } from './listado-ticket/listado-ticket';
import { DetalleTicket } from './detalle-ticket/detalle-ticket';
import { VisualizacionTicket } from './visualizacion-ticket/visualizacion-ticket';
import { CreateUpdateTicket } from './create-update-ticket/create-update-ticket';
import { Asignaciones } from './asignaciones/asignaciones';
import { UpdateTicket } from './update-ticket/update-ticket';
import { authGuard } from '../share/guards/auth.guard';
import { E_Role } from '../share/models/enums/role.enum';

const routes: Routes = [
  {path:'ListadoTicket', component: ListadoTicket, canActivate: [authGuard], data: { roles: [E_Role.ADMIN, E_Role.TECHNICIAN] } },
  {path:'DetalleTicket/:id', component: DetalleTicket, canActivate: [authGuard]},
  {path:'VisualizacionTicket', component: VisualizacionTicket, canActivate: [authGuard]},
  {path:'CreateUpdateTicket', component: CreateUpdateTicket, canActivate: [authGuard], data: { roles: [E_Role.ADMIN, E_Role.USER ] } },
  {path:'AsignacionesTicket', component: Asignaciones, canActivate: [authGuard], data: { roles: [E_Role.ADMIN] } },
  {path:'UpdateTicket/:id', component: UpdateTicket, canActivate: [authGuard], data: { roles: [E_Role.ADMIN, E_Role.TECHNICIAN] } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule { }
