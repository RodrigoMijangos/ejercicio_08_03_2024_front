import { Component } from '@angular/core';
import { Departamento } from '../entidades/departamento';
import { DepartamentoServicio} from '../servicios/departamento-servicio.service';

@Component({
  selector: 'app-nuevo-empleado',
  templateUrl: './nuevo-empleado.component.html',
  styleUrl: './nuevo-empleado.component.css'
})
export class NuevoEmpleadoComponent {

  constructor(private _departamentoServicio: DepartamentoServicio){}

  departamento_lista: Departamento[] = this._departamentoServicio.getDepartamentos()
  onChange(value: any){

    console.log(value.target.value)

  }

}
