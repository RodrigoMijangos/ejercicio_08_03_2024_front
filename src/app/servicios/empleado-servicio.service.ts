import { Injectable } from '@angular/core';
import { Empleado } from '../entidades/empleado';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { EmpleadoRequest } from '../entidades/empleado-request';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoServicio {

  constructor(private _http: HttpClient) { }

  server: String = "http://localhost:8080/api/v1/"

  getEmpleados(): Observable<Empleado[]>{
    return this._http.get<Empleado[]>(this.server+"empleados")
  }

  getEmpleado(id: number): Observable<Empleado>{
    return this._http.get<Empleado>(this.server+`empleados/${id}`)
  }

  postEmpleado(empleado: Empleado): Observable<HttpResponse<any>>{
    return this._http.post<HttpResponse<Empleado>>(this.server+"empleados", empleado)
  }

  putEmpleado(empleado: Empleado): Observable<HttpResponse<Empleado>>{
    return this._http.put<HttpResponse<Empleado>>(this.server+`empleados/${empleado.id}`, empleado)
  }
  deleteEmpleado(id: number): Observable<HttpResponse<Empleado>>{
    return this._http.delete<HttpResponse<Empleado>>(this.server+`empleados/${id}`)
  }
}
