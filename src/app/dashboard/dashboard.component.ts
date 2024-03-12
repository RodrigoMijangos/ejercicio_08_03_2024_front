import { Component, OnInit } from '@angular/core';
import { Empleado } from '../entidades/empleado';
import { EmpleadoServicio } from '../servicios/empleado-servicio.service';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  constructor(private _empleadoServicio: EmpleadoServicio,
              private _router: Router){}

  empleados_lista: Empleado[] = []

  ngOnInit(): void {
    this._empleadoServicio.getEmpleados().subscribe(
      res => {
        console.log(res)
        this.empleados_lista = res
      }
    )
  }

  delete(id: number){
    this._empleadoServicio.deleteEmpleado(id).subscribe(
      () => window.location.reload(),
      (err: HttpErrorResponse) => window.alert(err.status)
    )
  }

  edit(id: number){
    this._router.navigate([`/empleados/${id}`])
  }

}
