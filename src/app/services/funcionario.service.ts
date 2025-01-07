import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Funcionario } from '../models/Funcionarios';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})

export class FuncionarioService {

  private apiUrl = `${environment.ApiUrl}/Funcionario`

  constructor(
    private http: HttpClient
  ) { }

  //Espera trazer os dados do service response da API criada
  GetFuncionarios(): Observable<Response<Funcionario[]>> {
    return this.http.get<Response<Funcionario[]>>(this.apiUrl);
  }

  GetFuncionarioId(id: number): Observable<Response<Funcionario>> {
    return this.http.get<Response<Funcionario>>(`${this.apiUrl}/${id}`);
  }

  createFuncionario(funcionario: Funcionario): Observable<Response<Funcionario[]>> {
    return this.http.post<Response<Funcionario[]>>(`${this.apiUrl}`, funcionario);
  }

  updateFuncionario(funcionario: Funcionario): Observable<Response<Funcionario[]>> {
    return this.http.put<Response<Funcionario[]>>(`${this.apiUrl}`, funcionario);
  }

  inativarFuncionario(id: number): Observable<Response<Funcionario>> {
    return this.http.patch<Response<Funcionario>>(`${this.apiUrl}/inativarFuncionario?id=${id}`, id);
  }

}
