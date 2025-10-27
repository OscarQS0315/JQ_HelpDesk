import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Listado } from './listado/listado';
import { Detalle } from './detalle/detalle';

const routes: Routes = [
  {path:'Listado', component: Listado},
  {path:'Detalle/:id', component: Detalle}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TecnicoRoutingModule { }
