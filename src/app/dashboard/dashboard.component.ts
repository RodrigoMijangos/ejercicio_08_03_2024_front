import { Component, OnInit } from '@angular/core';
import { Empleado } from '../entidades/empleado';
import { EmpleadoServicio } from '../servicios/empleado-servicio.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  constructor(private _empleadoServicio: EmpleadoServicio){}

  empleados_lista: Empleado[] = []

  ngOnInit(): void {
    this._empleadoServicio.getEmpleados().subscribe(
      res => this.empleados_lista = res
    )
  }

}
