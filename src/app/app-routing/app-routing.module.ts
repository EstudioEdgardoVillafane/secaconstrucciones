import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

//Componentes                       
import { HomeComponent } from '../home/home.component';
import {BackendComponent} from '../backend/backend.component';
import {BackendProductsComponent} from '../backend-products/backend-products.component';
import {BackendAtributoComponent} from '../backend-atributo/backend-atributo.component';
import { BackendSeccionComponent } from '../backend-seccion/backend-seccion.component';
import { BackendUserComponent } from '../backend-user/backend-user.component';
import { BackendSubatributoComponent } from '../backend-subatributo/backend-subatributo.component';
import { MaquetaComponent } from '../maqueta/maqueta.component';
import { LoginComponent} from '../login-y-registro/login/login.component';
import { RegistroComponent} from '../login-y-registro/registro/registro.component';

/*                Rutas                             */
import {ProductoDetalleComponent} from '../producto-detalle/producto-detalle.component';
import {ComoLlegarComponent} from '../como-llegar/como-llegar.component';
import {ContactoComponent} from '../contacto/contacto.component';



// Rutas                             
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin771',  component: BackendComponent,

  children:[
    { path: '', redirectTo: 'productos', pathMatch: 'full'},
    { path: 'subatributo', component: BackendSubatributoComponent },
    { path: 'productos', component: BackendProductsComponent },
    { path: 'seccion', component: BackendSeccionComponent },
    { path: 'atributo', component: BackendAtributoComponent },
    { path: 'usuarios', component: BackendUserComponent },
    ]
  },
  { path: 'productos', component: BackendProductsComponent },
  { path: 'detalle-producto/:nombre', component: ProductoDetalleComponent },
  { path: 'maqueta', component: MaquetaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent }
 
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
