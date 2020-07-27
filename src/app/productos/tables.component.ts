import { Component, OnInit,ViewChild } from '@angular/core';
import { ServicioService } from '../servicio.service';
import {MatPaginator} from '@angular/material/paginator';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {EditarProductoComponent} from '../editar-producto/editar-producto.component';
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {



  data;

  columnas:string[]=['idProducto','idCat','nombre','precio','foto','eliminar','editar']
  constructor( private http: ServicioService,private router:Router,public  modal:MatDialog) {





  }

  ngOnInit(): void {

    this.http.listarProductos().subscribe(value=>{

      console.log(value);
      this.data=value;

    })

  }
  eliminarProducto(id){
    this.http.elimianrProduct(String(id)).subscribe(value => {

      alert("Producto Eliminado");

      //window.location.reload();
      this.http.listarProductos().subscribe(value=>{

        console.log(value);
        this.data=value;

      })


    },error => {
      alert("No puedes eliminar este producto ya que un pedido de un usuario contiene este producto")
    });

  }
  crear(){
      this.router.navigate(['inicio/crear']);
  }



  editar(id,foto,codcat,nombre,precio) {
    const pro= {
      idProducto: id,
      idCat: codcat,
      nombre: nombre,
      precio: precio,
      foto: foto
    }
    const modal=this.modal.open(EditarProductoComponent,{
      data:pro
      });











  }



}
