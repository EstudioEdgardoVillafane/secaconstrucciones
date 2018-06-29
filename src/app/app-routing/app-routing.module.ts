import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

//Componentes                       
import { HomeComponent } from '../home/home.component';
import {BackendComponent} from '../backend/backend.component';
import {BackendProductsComponent} from '../backend-products/backend-products.component';
import {BackendAtributoComponent} from '../backend-atributo/backend-atributo.component';
import { LoginComponent} from '../login/login.component';
import { BackendSeccionComponent } from '../backend-seccion/backend-seccion.component';
import { BackendUserComponent } from '../backend-user/backend-user.component';
import { BackendSubatributoComponent } from '../backend-subatributo/backend-subatributo.component';
import { BackendClienteComponent } from '../backend-cliente/backend-cliente.component';
import { ValidacionClienteComponent } from '../validacion-cliente/validacion-cliente.component';
import { MaquetaComponent } from '../maqueta/maqueta.component';

/*                Rutas                             */
import {ProductoDetalleComponent} from '../producto-detalle/producto-detalle.component';

import { ProductoEtiquetaComponent } from '../producto-etiqueta/producto-etiqueta.component';

import {LoginYRegistroComponent} from '../login-y-registro/login-y-registro.component';
import { ProductoFiltradoComponent } from '../producto-filtrado/producto-filtrado.component';
import { ProductoCategoriaComponent } from '../producto-categoria/producto-categoria.component';
import { ProductoBusquedaComponent } from '../producto-busqueda/producto-busqueda.component';
import { LoginFrontComponent } from '../login-front/login-front.component';
import { RegistroFrontComponent } from '../registro-front/registro-front.component';
import { MasCategoriaComponent } from '../mas-categoria/mas-categoria.component';
import { HeaderComponent } from '../header/header.component';
// Rutas                             
const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'validacion', component: ValidacionClienteComponent},
  { path: 'admin771', component: LoginComponent},
  { path: 'login', component: LoginFrontComponent},
  { path: 'registro', component: RegistroFrontComponent},
  
  { path: 'admin771', component: LoginComponent },
  { path: '',
  component: HeaderComponent,
  children:[
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'categorias', component: MasCategoriaComponent },
    { path: 'detalle/:slug', component: ProductoDetalleComponent },
    { path: 'productos-seccion/:seccion', component: ProductoFiltradoComponent },
    { path: 'productos-categoria/:categoria', component: ProductoCategoriaComponent },
    { path: 'productos-busqueda/:producto', component: ProductoBusquedaComponent },
    { path: 'producto-etiqueta/:etiqueta', component: ProductoEtiquetaComponent },
  ]
  },
  { path: 'backend',
  component: BackendComponent,
  children:[
    { path: '', redirectTo: 'productos', pathMatch: 'full'},
    { path: 'subatributo', component: BackendSubatributoComponent },
    { path: 'productos', component: BackendProductsComponent },
    { path: 'seccion', component: BackendSeccionComponent },
    { path: 'atributo', component: BackendAtributoComponent },
    { path: 'clientes', component: BackendClienteComponent},
    { path: 'usuarios', component: BackendUserComponent },
    ]
  },


];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
],
  declarations: []
})

export class AppRoutingModule {}
