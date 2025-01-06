import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-adicionar-funcionario',
  templateUrl: './adicionar-funcionario.component.html',
  styleUrls: [ './adicionar-funcionario.component.css' ]
})
export class AdicionarFuncionarioComponent {

  btnAcao = "Cadastrar!"
  btnTitulo = "Cadastrar funcionário!"

  constructor(
    private funcionarioService: FuncionarioService,
    private router: Router) { }

  createFuncionario(funcionario: Funcionario) {
    this.funcionarioService.createFuncionario(funcionario).subscribe((response) => {
      this.router.navigate([ '/' ])
    })
  }
}
