import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   form: FormGroup;


  constructor(private builder: FormBuilder, private router: Router, private service: ServicioService ) {


      this.form=this.builder.group({
        username:['',Validators.required],
        password:['',Validators.required]


      });



   }

  ngOnInit(): void {
  }

  ingresar(){

      const login ={
        email:this.form.controls.username.value,
        password:this.form.controls.password.value
      };



      this.service.login(login).subscribe(value=>{

        localStorage.setItem("usuario",value.usuario.idUser);

          localStorage.setItem("rol",value.usuario.idRol);
          alert("logeado");
          this.router.navigate(['/inicio']);

      },error=>{
        alert(error.error.message);

      });




  }

}
