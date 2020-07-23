import { Component, OnInit } from '@angular/core';
import {ServicioService} from '../servicio.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {
  id=0;
  form:FormGroup;

  constructor(private http:ServicioService,private builder:FormBuilder) {

    this.form=this.builder.group({
      nombre:['',Validators.required],
      precio:['',Validators.required]


    })


  }

  ngOnInit(): void {
  }

  crear() {

    const pro={

    idCat:this.id,
nombre:this.form.controls.nombre.value,
precio:this.form.controls.precio.value,
foto:"null"

    };

      this.http.crearProducto(pro).subscribe(value => {
        alert('Producto registrado con exito');
      window.location.reload();
      },error => {

        alert("No se pudo registrar el producto");
      })

  }
}
