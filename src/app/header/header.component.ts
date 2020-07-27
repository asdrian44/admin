import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  productos=false;
  pedidos=false;
  clientes=false;
  categorias=false;
  empleados=false;
  constructor(private router: Router) {
  }

  ngOnInit(): void {


    const rol=Number(String(localStorage.getItem("rol")));

    if(rol==3){
      this.pedidos=true;
    }else if(rol==2){

      this.productos=true;
      this.pedidos=true;
      this.clientes=true;
      this.categorias=true;
      this.empleados=true;
    }


  }

  goproductos(): void {
    this.router.navigate(['/inicio/productos']);
  }

  gopedidos(): void {
    this.router.navigate(['/inicio/pedidos']);
  }
  goclientes(): void{
    this.router.navigate(['/inicio/clientes']);

  }

  gocategorias(): void{
    this.router.navigate(['/inicio/categorias']);
  }

  goempleados() {
    this.router.navigate(['/inicio/empleados']);
  }
}
