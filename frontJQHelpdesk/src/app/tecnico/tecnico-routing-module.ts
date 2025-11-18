import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Listado } from './listado/listado';
import { Detalle } from './detalle/detalle';
import { CreateUpdateTecnico } from './create-update-tecnico/create-update-tecnico';

const routes: Routes = [
  {path:'Listado', component: Listado},
  {path:'Detalle/:id', component: Detalle},
  {path:'Crear-UpdateTecnico', component: CreateUpdateTecnico},
  {path:'Crear-UpdateTecnico/update/:id', component: CreateUpdateTecnico}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TecnicoRoutingModule { }
