import { Departamento } from "./departamento"

export interface Empleado {

    id: number
    nombre: string
    apellido: string
    curp: string
    rfc: string
    edad: string
    telefono: string
    correo: string
    departamento: Departamento

}
