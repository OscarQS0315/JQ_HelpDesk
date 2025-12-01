import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { Inicio } from './inicio/inicio';

const routes: Routes = [
  {path:'Login', component: Login},
  {path:'Inicio', component: Inicio},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
