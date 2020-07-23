import { Component, OnInit,ViewChild } from '@angular/core';
import { ServicioService } from '../servicio.service';
import {MatPaginator} from '@angular/material/paginator';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  foto;
  id=0;
  click=false;
  data;
  form:FormGroup;
  columnas:string[]=['idProducto','idCat','nombre','precio','foto','eliminar','editar']
  constructor( private http: ServicioService,private router:Router,private builder:FormBuilder) {

    this.form=this.builder.group({

      nombre:['',Validators.required],
      precio:['',Validators.required]


    })



  }

  ngOnInit(): void {

    this.http.listarProductos().subscribe(value=>{


      this.data=value;

    })

  }
  eliminarProducto(id){
    this.http.elimianrProduct(String(id)).subscribe(value => {

      alert("Producto Eliminado");

      window.location.reload();
    },error => {
      alert("No puedes eliminar este producto ya que un pedido de un usuario contiene este producto")
    });

  }
  crear(){
      this.router.navigate(['inicio/crear']);
  }

  abrir(n,foto){
    this.click=true;
    this.id=n;
    this.foto=foto;
  }

  editar() {

    const pro={
      idProducto:this.id,
      idCat:1,
      nombre:this.form.controls.nombre.value,
      precio:this.form.controls.precio.value,
      foto:this.foto

    };


    this.http.editarProducto(pro).subscribe(value => {

      alert("Producto editado correctamente");
      window.location.reload();
    },error => {
      alert("error al editar producto");
    })


    this.click=false;
  }



}
