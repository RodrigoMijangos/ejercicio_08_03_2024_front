import { Component, OnInit } from '@angular/core';
import { Departamento } from '../entidades/departamento';
import { DepartamentoServicio} from '../servicios/departamento-servicio.service';
import { Observable } from 'rxjs';
import { Empleado } from '../entidades/empleado';

@Component({
  selector: 'app-nuevo-empleado',
  templateUrl: './nuevo-empleado.component.html',
  styleUrl: './nuevo-empleado.component.css'
})
export class NuevoEmpleadoComponent implements OnInit{

  constructor(private _departamentoServicio: DepartamentoServicio){
    this.empleadoNuevo = {
      id: 0,
      nombre: '',
      apellido: '',
      curp: '',
      rfc: '',
      correo: '',
      edad: '',
      telefono: '',
      departamento: {id: 0, nombre: '', descripcion: '', direccion: ''}
    }
  }

  departamento_lista: Departamento[] = []

  empleadoNuevo: Empleado

  ngOnInit(): void {
     this._departamentoServicio.getDepartamentos().subscribe(
      departamentos => this.departamento_lista = departamentos
     )

     console.log(this.departamento_lista)
  }
  
  onChange(event: any){

    console.log(event.target.value)

  }

  changeModel(){
    console.log(this.empleadoNuevo)
  }

}
