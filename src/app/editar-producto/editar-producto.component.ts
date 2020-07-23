import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ServicioService} from '../servicio.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  form:FormGroup;

  constructor(private http:ServicioService,private builder:FormBuilder) {

    this.form=this.builder.group({

      nombre:['',Validators.required],
      precio:['',Validators.required]


    })


  }

  ngOnInit(): void {
  }

  editar() {

    const pro={
      idProducto:1,
      idCat:1,
      nombre:this.form.controls.nombre.value,
      precio:this.form.controls.precio.value,
      foto:"null"

    };


    this.http.editarProducto(pro).subscribe(value => {

      alert("Producto editado correctamente");
    },error => {
      alert("error al editar producto");
    })
  }
}
