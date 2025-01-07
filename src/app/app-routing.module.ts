import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AdicionarFuncionarioComponent } from './pages/funcionario/adicionar-funcionario/adicionar-funcionario.component';
import { EditarFuncionarioComponent } from './pages/funcionario/editar-funcionario/editar-funcionario.component';
import { DetalhesComponent } from './pages/funcionario/detalhes/detalhes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadastrarFuncionario', component: AdicionarFuncionarioComponent },
  { path: 'editarFuncionario/:id', component: EditarFuncionarioComponent },
  { path: 'detalhes/:id', component: DetalhesComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
