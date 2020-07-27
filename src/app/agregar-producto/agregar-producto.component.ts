import {Component, OnInit} from '@angular/core';
import {ServicioService} from '../servicio.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {
  id = 0;
  form: FormGroup;
  foto;
  datos;

  constructor(private http: ServicioService, private builder: FormBuilder) {


    this.http.listarCategoria().subscribe(value => {
      this.datos = value;
    });

    this.form = this.builder.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      categoria: ['', Validators.required],


    });


  }

  ngOnInit(): void {
  }

  crear() {

    const pro = {


      nombre: this.form.controls.nombre.value,
      precio: this.form.controls.precio.value,
      idCat: this.form.controls.categoria.value,
      foto: 'null'

    };


    this.http.subirImage(this.foto).subscribe(value => {
      // @ts-ignore
      pro.foto = value.url;
      this.http.crearProducto(pro).subscribe(value => {
        alert('Producto registrado con exito');

      }, error => {

        alert('No se pudo registrar el producto');
      });


    });
    this.form.reset();

  //  window.location.reload();


  }

  upload(event) {
    const file = event.target.files[0];
    this.foto = file;
  }
}
