import { Injectable } from '@angular/core';
import { Empleado } from '../entidades/empleado';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoServicio {

  constructor(private _http: HttpClient) { }

  server: String = "localhost:8080/api/v1/"

  getEmpleados(): Observable<Empleado[]>{
    return this._http.get<Empleado[]>(this.server+"empleados")
  }

  getEmpleado(id: number): Observable<Empleado>{
    return this._http.get<Empleado>(this.server+`empleados/${id}`)
  }

  postEmpleado(empleado: Empleado): void{
    this._http.post(this.server+"empleados", empleado)
  }

  putEmpleado(empleado: Empleado): void{
    this._http.put(this.server+`empleados`, empleado)
  }
  deleteEmpleado(id: number): void{
    this._http.delete(this.server+`empleados/${id}`)
  }
}
