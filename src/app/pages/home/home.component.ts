import { Component, OnInit } from '@angular/core';

import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {

  funcionarios: Funcionario[] = []
  funcionariosGeral: Funcionario[] = []

  constructor(private funcionarioService: FuncionarioService) { }

  //para ao startar a home já fazer automaticamente o get que será implementado
  ngOnInit(): void {
    this.funcionarioService.GetFuncionarios().subscribe((response) => {
      const dados = response.data;

      dados.map((item) => {
        item.admissao = new Date(item.admissao!).toLocaleDateString('pt-BR');
        item.alteradoEm ? new Date(item.admissao!).toLocaleDateString('pt-BR') : null;
      })

      this.funcionarios = dados;
      this.funcionariosGeral = dados;
    });
  }

  search(event: Event) {
    const target = event.target as HTMLInputElement; //o retorno do evento de input
    const value = target.value.toLowerCase(); //pegando o value de dentro do envento

    this.funcionarios = this.funcionariosGeral.filter(funcionario => {
      return funcionario.nome.toLowerCase().includes(value);
    })
  }

}
