import { Component, OnInit } from '@angular/core';
import { Departamento } from '../entidades/departamento';
import { DepartamentoServicio} from '../servicios/departamento-servicio.service';
import { Observable } from 'rxjs';
import { Empleado } from '../entidades/empleado';
import { EmpleadoServicio } from '../servicios/empleado-servicio.service';
import { HttpErrorResponse } from '@angular/common/http';
//import { EmpleadoRequest } from '../entidades/empleado-request';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-empleado',
  templateUrl: './nuevo-empleado.component.html',
  styleUrl: './nuevo-empleado.component.css'
})
export class NuevoEmpleadoComponent implements OnInit{

  constructor(private _departamentoServicio: DepartamentoServicio,
              private _empleadoServicio: EmpleadoServicio,
              private _activeRoute: ActivatedRoute,
              private _router: Router){
    this.empleadoNuevo = {
      id: 0,
      nombre: '',
      apellido: '',
      curp: '',
      rfc: '',
      correo: '',
      edad: 0,
      telefono: '',
      departamento: {id: 0, nombre: '', descripcion: '', direccion: ''}
    }
  }

  departamento_lista: Departamento[] = []

  empleadoNuevo: Empleado

  editar: Boolean = false

  ngOnInit(): void {

    const params =  this._activeRoute.snapshot.paramMap
     if(params.has('id')){
      const id = Number(params.get('id'))  
      this.editar = true
      if(isNaN(id)){
        window.alert("Solo numeros como parametro")
        this._router.navigate(['/'])
      }

      this._empleadoServicio.getEmpleado(id).subscribe(
        res => {
          console.log(res)
          this.empleadoNuevo = res
        },
        (err: HttpErrorResponse) => {
          if(err.status !== 200){
            window.alert(`Error: Codigo de estado ${err.status}`)
            this._router.navigate(['/'])
          }
        }
      )

     }

     this._departamentoServicio.getDepartamentos().subscribe(
      departamentos => {
        this.departamento_lista = departamentos
        if(!this.editar){
          if(this.departamento_lista.length != 0)
            this.empleadoNuevo.departamento = this.departamento_lista[0]
        }
      }
     )

  }
  
  onChange(event: any){

    let departamento = this.departamento_lista.find(departamento => departamento.id = event.target.value)
    if(departamento !== undefined){
      this.empleadoNuevo.departamento = departamento
      console.log(this.empleadoNuevo)
    }else{
      alert("El departamento no es una opción válida")
    }

  }

  changeModel(){
    console.log(this.empleadoNuevo)
    if(!this.editar){
      this._empleadoServicio.postEmpleado(this.empleadoNuevo).subscribe(
        response => {
          window.location.reload()
        }, (err: HttpErrorResponse) =>{
          window.alert("Error: Código de respuesta " + err.status)
        }
      )
    }else{
      this._empleadoServicio.putEmpleado(this.empleadoNuevo).subscribe(
        response => {
          window.location.reload()
        }, (err: HttpErrorResponse) =>{
          window.alert("Error: Código de respuesta " + err.status)
        }
        
      )
    }

  }

}
