import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ServicioService} from '../servicio.service';

@Component({
  selector: 'app-agregar-categoria',
  templateUrl: './agregar-categoria.component.html',
  styleUrls: ['./agregar-categoria.component.css']
})
export class AgregarCategoriaComponent implements OnInit {


  form:FormGroup;

  constructor(private http:ServicioService,private builder:FormBuilder) {
    console.log("Entraron");

    this.form=builder.group({

      nombrecat:['',Validators.required]

    })

  }

  ngOnInit(): void {
  }

  agregarCat(){

    const cat={
      categoria:String(this.form.controls.nombrecat.value)
    }


    this.http.listarCategoria().subscribe(value => {



      const existe=value.find(value=>{
        return value.categoria==cat.categoria
      })

      console.log(existe);

      if(existe){

        alert("Ya existe una categoria con este nombre")
      }else{
        this.http.crearCategoria(cat).subscribe(value=>{

          alert("Categoria creada");
          window.location.reload()
        })
      }

    })








  }

}
