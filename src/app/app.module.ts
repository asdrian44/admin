import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {TablesComponent} from './productos/tables.component';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ServicioService} from '../app/servicio.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {HeaderComponent} from './header/header.component';
import {MatMenuModule} from '@angular/material/menu';
import {PedidosComponent} from './pedidos/pedidos.component';
import {ClientesComponent} from './clientes/clientes.component';
import {CategoriasComponent} from './categorias/categorias.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MaterialFileInputModule} from 'ngx-material-file-input';
import {MatIconModule} from '@angular/material/icon';
import { AgregarCategoriaComponent } from './agregar-categoria/agregar-categoria.component';
import { EditarPedidoComponent } from './editar-pedido/editar-pedido.component';
import {AccesoGuard} from './acceso.guard';
import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';
import { EmpleadosComponent } from './empleados/empleados.component';

const rutas: Routes = [{

  path: 'login', component: LoginComponent
},
  {
    path:'inicio',component: HeaderComponent,canActivate:[AccesoGuard],children:[

      {
        path: 'productos', component: TablesComponent
      },
      {
        path: 'pedidos', component: PedidosComponent

      }, {
        path: 'clientes', component: ClientesComponent

      }, {
        path: 'categorias', component: CategoriasComponent,children:[

          {
            path:'crearcat',component:AgregarCategoriaComponent
          }

        ]

      },{
      path:'crear',component:AgregarProductoComponent
      },{
      path:'editar',component:EditarProductoComponent
      },{
      path:'crearempleado',component:AgregarEmpleadoComponent
      },
      {
        path:'empleados',component:EmpleadosComponent
      }


    ]
  },


  {
    path: '**', component: LoginComponent
  }];

@NgModule({
  declarations: [
    AppComponent,
    TablesComponent,
    LoginComponent,
    HeaderComponent,
    PedidosComponent,
    ClientesComponent,
    CategoriasComponent,
    AgregarProductoComponent,
    EditarProductoComponent,
    AgregarCategoriaComponent,
    EditarPedidoComponent,
    AgregarEmpleadoComponent,
    EmpleadosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas), ReactiveFormsModule, FormsModule, HttpClientModule, BrowserAnimationsModule, MatTableModule, MatButtonModule, MatMenuModule, MatInputModule, MatDialogModule, MatSelectModule, MaterialFileInputModule, MatIconModule


  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
