import { Component } from '@angular/core';
import { Empleado } from '../entidades/empleado';
import { EmpleadoServicio } from '../servicios/empleado-servicio.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private _empleadoServicio: EmpleadoServicio){}

  empleados_lista: Empleado[] = this._empleadoServicio.getEmpleados();

}
