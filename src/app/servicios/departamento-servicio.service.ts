import { Injectable } from '@angular/core';
import { Departamento } from '../entidades/departamento';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoServicio {

  constructor(private _http: HttpClient) { }

  server: String = "http://localhost:8080/api/v1/"

  getDepartamentos(): Observable<Departamento[]>{
    return this._http.get<Departamento[]>(this.server+"departamentos")
  }

}
