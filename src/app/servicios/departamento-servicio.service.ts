import { Injectable } from '@angular/core';
import { Departamento } from '../entidades/departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoServicio {

  constructor() { }

  getDepartamentos(): Departamento[]{
    return [
      {id: 1, nombre: "Departamento 1", descripcion: "Descripcion 1", direccion: "direccion 1"},
      {id: 2, nombre: "Departamento 2", descripcion: "Descripcion 2", direccion: "direccion 2"},
      {id: 3, nombre: "Departamento 3", descripcion: "Descripcion 3", direccion: "direccion 3"},
      {id: 4, nombre: "Departamento 4", descripcion: "Descripcion 4", direccion: "direccion 4"},
    ]
  
  }

}
