import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

   private url='https://4c632e1aed4d.ngrok.io/';

  constructor(private http: HttpClient) { }


  login(username): Observable<any>{

    return this.http.post(this.url + 'api/admin', username);

  }
  listarProductos(): Observable<any>{


    return this.http.get(this.url+'apis/productos');

  }

  listarPedidos(): Observable<any>{

    return this.http.get(this.url+'apis/pedido');


  }
  listarClientes():Observable<any>{
    return  this.http.get(this.url+'api/admin/users');
  }
  listarEmpleados():Observable<any>{
    return  this.http.get(this.url+'api/admin/empleados');
  }

  listarCategoria():Observable<any>{
    return this.http.get(this.url+'apis/categorias');
  }

  elimianrProduct(id){

    return this.http.delete(this.url+'apis/producto/'+id);
  }
  crearProducto(pro):Observable<any>{

    return this.http.post(this.url+'apis/productos',pro);
  }

  editarProducto(pro) :Observable<any>{

    return this.http.put(this.url+'apis/producto',pro);
  }

  subirImage(foto){
    const form=  new FormData();
    form.append('file',foto);
    form.append('upload_preset','go8zeit9');


    return this.http.post('https://api.cloudinary.com/v1_1/thinker/image/upload',form);



  }

  crearCategoria(cat: { categoria: any }):Observable<any> {

    return this.http.post(this.url+'apis/categorias',cat);

  }

  estadosPedidos():Observable<any> {
    return this.http.get(this.url+'apis/estadospedido');
  }

  editarPedido(pro: { idpedido: any; idestado: any }): Observable<any> {

    return this.http.put(this.url+"apis/pedido",pro);

  }

  eliminarPedido(id):Observable<any>{

    return this.http.delete(this.url+'apis/pedido/'+id);
  }

  crearEmpleado(usuario: { lastName: any; password: any; phone: any; name: any; addres: any; email: any }):Observable<any> {
    return  this.http.post(this.url+'api/admin/users',usuario);
  }
}
