import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from  '@angular/common/http'; //para usar na service
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //para os formularios

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AdicionarFuncionarioComponent } from './pages/funcionario/adicionar-funcionario/adicionar-funcionario.component';
import { FuncionarioFormComponent } from './pages/components/funcionario-form/funcionario-form.component';
import { EditarFuncionarioComponent } from './pages/funcionario/editar-funcionario/editar-funcionario.component';
import { DetalhesComponent } from './pages/funcionario/detalhes/detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdicionarFuncionarioComponent,
    FuncionarioFormComponent,
    EditarFuncionarioComponent,
    DetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
