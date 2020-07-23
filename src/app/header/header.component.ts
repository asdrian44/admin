import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
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

}
