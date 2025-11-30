import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoNotificaciones } from './listado-notificaciones/listado-notificaciones';


const routes: Routes = [
  {path:'Notificaciones', component: ListadoNotificaciones},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificacionesRoutingModule { }
