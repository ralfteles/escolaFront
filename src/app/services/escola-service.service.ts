import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EscolaServiceService {

  private header = new HttpHeaders();
  constructor(public http: HttpClient) { }

  ObterEscolas() {
    return this.http.get("https://localhost:5001/api/escola/obterescolas")
  }

  AddEscola(obj) {
    return this.http.post("https://localhost:5001/api/escola/adicionarEscola", obj);
  }


}
