import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Inicio } from './home/inicio/inicio';
import { PageNotFound } from './share/page-not-found/page-not-found';
import { Listado } from './tecnico/listado/listado';
import { Detalle } from './tecnico/detalle/detalle';
import { ListadoCategoria } from './categoria/listado-categoria/listado-categoria';
import { DetalleCategoria } from './categoria/detalle-categoria/detalle-categoria';
import { ListadoTicket } from './ticket/listado-ticket/listado-ticket';
import { DetalleTicket } from './ticket/detalle-ticket/detalle-ticket';
import { VisualizacionTicket } from './ticket/visualizacion-ticket/visualizacion-ticket';
import { CreateUpdateTecnico } from './tecnico/create-update-tecnico/create-update-tecnico';
import { CreateUpdateTicket } from './ticket/create-update-ticket/create-update-ticket';
import { CreateUpdateCategoria } from './categoria/create-update-categoria/create-update-categoria';
import { Asignaciones } from './ticket/asignaciones/asignaciones';
import { ListadoNotificaciones } from './notificaciones/listado-notificaciones/listado-notificaciones';
import { UpdateTicket } from './ticket/update-ticket/update-ticket';
import { E_Role } from './share/models/enums/role.enum';
import { authGuard } from './share/guards/auth.guard';



const routes: Routes = [
  { path: 'inicio', component: Inicio },
  { path: 'Listado', component: Listado, canActivate: [authGuard], data: { roles: [E_Role.ADMIN] } },
  { path: 'Detalle/:id', component: Detalle, canActivate: [authGuard] },
  { path: 'ListadoCategoria', component: ListadoCategoria, canActivate: [authGuard], data: { roles: [E_Role.ADMIN] } },
  { path: 'DetalleCategoria/:id', component: DetalleCategoria, canActivate: [authGuard] },
  { path: 'ListadoTicket', component: ListadoTicket, canActivate: [authGuard] },
  { path: 'DetalleTicket/:id', component: DetalleTicket, canActivate: [authGuard] },
  { path: 'VisualizacionTicket', component: VisualizacionTicket, canActivate: [authGuard] },
  { path: 'Crear-UpdateTecnico', component: CreateUpdateTecnico, canActivate: [authGuard], data: { roles: [E_Role.ADMIN] } },
  { path: 'Crear-UpdateTecnico/update/:id', component: CreateUpdateTecnico, canActivate: [authGuard], data: { roles: [E_Role.ADMIN] } },
  { path: 'CreateUpdateTicket', component: CreateUpdateTicket, canActivate: [authGuard] },
  { path: 'CreateUpdateCategoria', component: CreateUpdateCategoria, canActivate: [authGuard], data: { roles: [E_Role.ADMIN] } },
  { path: 'CreateUpdateCategoria/update/:id', component: CreateUpdateCategoria, canActivate: [authGuard], data: { roles: [E_Role.ADMIN] } },
  { path: 'AsignacionesTicket', component: Asignaciones, canActivate: [authGuard], data: { roles: [E_Role.ADMIN, E_Role.TECHNICIAN] } },
  { path: 'Notificaciones', component: ListadoNotificaciones, canActivate: [authGuard]},
  { path: 'UpdateTicket/:id', component: UpdateTicket, canActivate: [authGuard], data: { roles: [E_Role.ADMIN, E_Role.TECHNICIAN] } },
  { path: 'Inicio', component: Inicio},
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: '**', component: PageNotFound }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
