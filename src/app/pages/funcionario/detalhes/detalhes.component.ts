import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/Funcionarios';

import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: [ './detalhes.component.css' ]
})
export class DetalhesComponent implements OnInit {

  funcionario?: Funcionario;
  id!: number;

  constructor(
    private funcionarioService: FuncionarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.funcionarioService.GetFuncionarioId(this.id).subscribe((response) => {
      const dados = response.data;

      dados.admissao = new Date(dados.admissao!).toLocaleDateString('pt-BR')
      dados.alteradoEm = dados.alteradoEm ? new Date(dados.alteradoEm!).toLocaleDateString('pt-BR') : 'Não houve alterações'

      this.funcionario = response.data;
    });
  }

  inativarFuncionario() {
    this.funcionarioService.inativarFuncionario(this.id).subscribe((response) => {
      this.router.navigate([ '' ]);
    })
  }

  // ativarFuncionario() {

  // }

}
