import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ServicioService} from '../servicio.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  form:FormGroup;
  foto;
  constructor(private http:ServicioService,private builder:FormBuilder,public dialogRef: MatDialogRef<EditarProductoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {

    this.form=this.builder.group({

      nombre:['',Validators.required],
      precio:['',Validators.required]


    })
    this.form.controls.nombre.setValue(this.data.nombre);
    this.form.controls.precio.setValue(this.data.precio);

  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnInit(): void {
    console.log(this.data);
  }

  editar() {

    this.data.nombre=this.form.controls.nombre.value;
    this.data.precio=this.form.controls.precio.value;

    if(this.foto!=null){
    this.http.subirImage(this.foto).subscribe(value => {
        //console.log(value);
        // @ts-ignore
        this.data.foto=value.url;
      this.http.editarProducto(this.data).subscribe(value => {
        alert("producto editado correctamente");
      },error => {
        alert("ups algo sucedio al editar el producto");
      });

      });


      this.dialogRef.close();
    }else{
      console.log("entro al else");
      this.http.editarProducto(this.data).subscribe(value => {
        alert("producto editado correctamente");
      },error => {
        alert("ups algo sucedio al editar el producto");
      });
    }






  }

  upload(event) {
    const file=event.target.files[0];
    this.foto = file;
  }
}
