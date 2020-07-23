import { Component, OnInit,ViewChild } from '@angular/core';
import { ServicioService } from '../servicio.service';
import {MatPaginator} from '@angular/material/paginator';
import {Router} from '@angular/router';
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  data;

  columnas:string[]=['idProducto','idCat','nombre','precio','foto','eliminar','editar']
  constructor( private http: ServicioService,private router:Router) { }

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

  editar() {
    this.router.navigate(['inicio/editar']);
  }
}
