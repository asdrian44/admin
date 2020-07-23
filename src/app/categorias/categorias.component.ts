import { Component, OnInit } from '@angular/core';
import {ServicioService} from '../servicio.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
    data;
    columnas:string[]=['idCat','categoria','editar','eliminar'];
  constructor(private http:ServicioService) { }

  ngOnInit(): void {

    this.http.listarCategoria().subscribe(value => {
      this.data=value;
    })
  }

}
