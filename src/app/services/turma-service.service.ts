import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TurmaServiceService {

  private header = new HttpHeaders();
  constructor(public http: HttpClient) { }

  obterTurmasDaEscola(idEscola) {
    return this.http.get(`https://localhost:5001/api/turma/obterTurmasDaEscola?idEscola=${idEscola}`)
  }

  addTurma(obj) {
    return this.http.post("https://localhost:5001/api/turma/adicionarTurma", obj);
  }
}
