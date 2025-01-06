import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Funcionario } from 'src/app/models/Funcionarios';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: [ './funcionario-form.component.css' ]
})
export class FuncionarioFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Funcionario>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;

  funcionarioForm!: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.funcionarioForm = new FormGroup({
      nome: new FormControl('', [ Validators.required ]),
      cpf: new FormControl('', [ Validators.required ]),
      turno: new FormControl('', [ Validators.required ])
    })
  }

  submit() {
    this.onSubmit.emit(this.funcionarioForm.value);
  }

}
