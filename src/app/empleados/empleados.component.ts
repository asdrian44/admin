import { Component, OnInit } from '@angular/core';
import {ServicioService} from '../servicio.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  data;
  columnas:string[]=['idDetails','name','lastName','address','phone'];
  constructor(private http:ServicioService,private router:Router) { }

  ngOnInit(): void {
    this.http.listarEmpleados().subscribe(value => {
      console.log(value);
      this.data=value;
    })





  }
  crear(){
    this.router.navigate(['inicio/crearempleado']);
  }

}
