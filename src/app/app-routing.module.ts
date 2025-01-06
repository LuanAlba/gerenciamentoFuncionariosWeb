import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AdicionarFuncionarioComponent } from './pages/funcionario/adicionar-funcionario/adicionar-funcionario.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadastrarFuncionario', component: AdicionarFuncionarioComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
