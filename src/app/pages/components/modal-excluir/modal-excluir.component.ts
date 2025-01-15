import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-modal-excluir',
  templateUrl: './modal-excluir.component.html',
  styleUrls: [ './modal-excluir.component.css' ]
})
export class ModalExcluirComponent implements OnInit {

  inputData: any;
  funcionario!: Funcionario

  constructor(
    private funcionarioService: FuncionarioService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<ModalExcluirComponent>
  ) { }


  ngOnInit(): void {
    this.inputData = this.data;

    this.funcionarioService.GetFuncionarioId(this.inputData.id).subscribe((response) => {
      this.funcionario = response.data;
    });
  }

  excluir() {
    this.funcionarioService.excluirFuncionario(this.inputData.id).subscribe((response) => {
      this.ref.close();
      window.location.reload();
    })
  }

  cancelar() {
    this.ref.close();
  }

}
