import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { ModalExcluirComponent } from '../components/modal-excluir/modal-excluir.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {

  funcionarios: Funcionario[] = []
  funcionariosGeral: Funcionario[] = []
  colunas = [ 'Situação', 'Nome', 'CPF', 'Turno', 'Admissao', 'Ações' ]

  constructor(
    private funcionarioService: FuncionarioService,
    public dialog: MatDialog) { }

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

  openDialog(id: number): void {
    this.dialog.open(ModalExcluirComponent, {
      width: '450px',
      height: '450px',
      data: {
        id: id
      }
    });
  }

}