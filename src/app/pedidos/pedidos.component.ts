import { Component, OnInit } from '@angular/core';
import {ServicioService} from '../servicio.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  data;
  columnas:string[]=['idCliente','idPedido','name','lastName','estados','total','editar','eliminar'];

  constructor(private axis:ServicioService) { }

  ngOnInit(): void {


    this.axis.listarPedidos().subscribe(value => {
      console.log(value);
      this.data=value;

    })

  }

}
