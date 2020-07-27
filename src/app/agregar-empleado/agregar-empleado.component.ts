import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ServicioService} from '../servicio.service';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {

  form:FormGroup;

  constructor(private builder:FormBuilder,private http:ServicioService) {


    this.form=this.builder.group({
      email:['',Validators.required],
      password:[String(new Date().getTime()),Validators.required],
      name:['',Validators.required],
      lastName:['',Validators.required],

      phone:['',Validators.required],




    })


  }

  ngOnInit(): void {
  }

  crearUsuario(){
  const usuario ={

    email:this.form.controls.email.value,
    password:this.form.controls.password.value,
    name:this.form.controls.name.value,
    lastName:this.form.controls.lastName.value,
    addres:this.form.controls.email.value,
    phone:this.form.controls.phone.value,

  }

    this.http.crearEmpleado(usuario).subscribe(value => {
      alert(value.message)
    },error => {
      alert("Error al registrar usuario intente denuevo");
    });
  }

}
