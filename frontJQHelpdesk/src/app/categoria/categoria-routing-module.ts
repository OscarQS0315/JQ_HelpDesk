import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoCategoria } from './listado-categoria/listado-categoria';
import { DetalleCategoria } from './detalle-categoria/detalle-categoria';


const routes: Routes = [
  {path:'ListadoCategoria', component: ListadoCategoria},
  {path:'DetalleCategoria/:id', component: DetalleCategoria}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
