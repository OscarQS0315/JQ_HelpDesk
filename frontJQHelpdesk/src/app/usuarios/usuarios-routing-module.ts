import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoUsuarios } from './listado-usuarios/listado-usuarios';
import { authGuard } from '../share/guards/auth.guard';
import { E_Role } from '../share/models/enums/role.enum';
import { DetalleUsuario } from './detalle-usuario/detalle-usuario';

const routes: Routes = [
  {path:'ListadoUsuarios', component: ListadoUsuarios, canActivate:[authGuard], data: { roles: [E_Role.ADMIN, E_Role.USER]}},
  {path:'DetalleUsuario/:id', component: DetalleUsuario, canActivate:[authGuard], data: { roles: [E_Role.ADMIN, E_Role.USER]}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
