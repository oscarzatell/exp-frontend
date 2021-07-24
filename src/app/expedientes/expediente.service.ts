import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpedienteService {

  constructor(
    private http: HttpClient
  ) { }

  dameExpedientes(){
    return this.http.get("http://localhost:1337/expedientes")
  }
  dameExpedientePorId(){}
  crearExpediente(){}
  removerExpedientePorId(){}
  borrarExpediente(){}


}