import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Listado } from './listado/listado';
import { Detalle } from './detalle/detalle';
import { CreateUpdateTecnico } from './create-update-tecnico/create-update-tecnico';
import { authGuard } from '../share/guards/auth.guard';
import { E_Role } from '../share/models/enums/role.enum';

const routes: Routes = [
  {path:'Listado', component: Listado, canActivate:[authGuard], data: { roles: [E_Role.ADMIN] }},
  {path:'Detalle/:id', component: Detalle, canActivate:[authGuard]},
  {path:'Crear-UpdateTecnico', component: CreateUpdateTecnico, canActivate:[authGuard], data: { roles: [E_Role.ADMIN] }},
  {path:'Crear-UpdateTecnico/update/:id', component: CreateUpdateTecnico, canActivate:[authGuard], data: { roles: [E_Role.ADMIN] }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TecnicoRoutingModule { }
