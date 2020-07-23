import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

   private url='https://6d758321b8fb.ngrok.io/';

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
}
