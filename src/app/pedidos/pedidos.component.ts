import { Component, OnInit } from '@angular/core';
import {ServicioService} from '../servicio.service';
import {MatDialog} from '@angular/material/dialog';
import {EditarPedidoComponent} from '../editar-pedido/editar-pedido.component';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  data;
  columnas:string[]=['idCliente','idPedido','name','lastName','estados','total','editar','eliminar'];

  constructor(private axis:ServicioService,public modal:MatDialog) { }

  ngOnInit(): void {


    this.axis.listarPedidos().subscribe(value => {
      console.log(value);
      this.data=value;

    })

  }

  editar(idpedido){

    const datapedido={
      idpedido
    };

      const modal=this.modal.open(EditarPedidoComponent,{
        data:datapedido
      })

  }
  eliminar(id){

    this.axis.eliminarPedido(id).subscribe(value => {
      alert("pedido eliminado correctamente");
      this.axis.listarPedidos().subscribe(value1 => {
        this.data=value1;
      })
    })
  }

}
