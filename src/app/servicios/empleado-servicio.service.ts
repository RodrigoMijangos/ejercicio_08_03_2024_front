import { Injectable } from '@angular/core';
import { Empleado } from '../entidades/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoServicio {

  constructor() { }

  getEmpleados(): Empleado[]{
    return [
      {id: 1, nombre: "Empleado 1", apellido: "Apellido 1", edad: "20", correo: "correo1@mail.com", curp: "CURP1", rfc: "RFC1", telefono: "Telefono 1", 
      departamento: {
        id: 1,
        nombre: "Nombre 1",
        descripcion:"descripcion 1",
        direccion: "Direccion 1"
      }},
      {id: 2, nombre: "Empleado 1", apellido: "Apellido 1", edad: "20", correo: "correo1@mail.com", curp: "CURP1", rfc: "RFC1", telefono: "Telefono 1", 
      departamento: {
        id: 1,
        nombre: "Nombre 1",
        descripcion:"descripcion 1",
        direccion: "Direccion 1"
      }},
      {id: 3, nombre: "Empleado 1", apellido: "Apellido 1", edad: "20", correo: "correo1@mail.com", curp: "CURP1", rfc: "RFC1", telefono: "Telefono 1", 
      departamento: {
        id: 1,
        nombre: "Nombre 1",
        descripcion:"descripcion 1",
        direccion: "Direccion 1"
      }}
    ]
  }
}
