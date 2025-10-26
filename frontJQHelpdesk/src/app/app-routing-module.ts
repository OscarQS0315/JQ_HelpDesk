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


const routes: Routes = [
{ path: 'inicio', component: Inicio },
{ path: 'Listado', component: Listado},
{ path: 'Detalle/:id', component: Detalle},
{path:'ListadoCategoria', component: ListadoCategoria},
{path:'DetalleCategoria/:id', component: DetalleCategoria},
{path:'ListadoTicket', component: ListadoTicket},
{path:'DetalleTicket/:Title', component: DetalleTicket},
{ path: '', redirectTo: '/inicio', pathMatch: 'full' },
{ path: '**', component: PageNotFound }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
