import { Component, OnInit } from '@angular/core';
import {ServicioService} from '../servicio.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  data;
  columnas:string[]=['idDetails','name','lastName','address','phone','editar','eliminar'];
  constructor(private servicio: ServicioService) { }

  ngOnInit(): void {

    this.servicio.listarClientes().subscribe(value => {

    this.data=value;

    })






  }

}
