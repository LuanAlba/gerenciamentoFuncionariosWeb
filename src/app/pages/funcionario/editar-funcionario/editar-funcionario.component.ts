import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: [ './editar-funcionario.component.css' ]
})
export class EditarFuncionarioComponent implements OnInit {
  btnAcao = "Atualizar!"
  btnTitulo = "Editar funcionário!"
  funcionario!: Funcionario;

  constructor(
    private funcionarioService: FuncionarioService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.funcionarioService.GetFuncionarioId(id).subscribe((response) => {
      this.funcionario = response.data;
    })
  }

  updateFuncionario(funcionario: Funcionario) {
    this.funcionarioService.updateFuncionario(funcionario).subscribe((response) => {
      this.router.navigate([ '/' ])
    })
  }
}
