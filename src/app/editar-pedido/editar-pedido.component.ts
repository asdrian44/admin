import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ServicioService} from '../servicio.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-editar-pedido',
  templateUrl: './editar-pedido.component.html',
  styleUrls: ['./editar-pedido.component.css']
})
export class EditarPedidoComponent implements OnInit {
  estadospedidos;
  form:FormGroup;

  constructor(private builder:FormBuilder,private http:ServicioService,public ref:MatDialogRef<EditarPedidoComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any
              ) {



    this.form=this.builder.group({

      estadopedido:['',Validators.required]


    })


  }

  ngOnInit(): void {
    this.http.estadosPedidos().subscribe(value=>{

      this.estadospedidos=value;
    })

  }

  editar() {

    const pro={
      idpedido:this.data.idpedido,
      idestado:this.form.controls.estadopedido.value
    }


    this.http.editarPedido(pro).subscribe(value => {
      alert("Pedido editado correctamente");
      window.location.reload();
    })
  }
}
