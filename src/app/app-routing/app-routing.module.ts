import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

//Componentes                       
import { HomeComponent } from '../home/home.component';
import {BackendComponent} from '../backend/backend.component';
import {BackendProductsComponent} from '../backend-products/backend-products.component';
import {ProductoDetalleComponent} from '../producto-detalle/producto-detalle.component';
import {ComoLlegarComponent} from '../como-llegar/como-llegar.component';
import {ContactoComponent} from '../contacto/contacto.component';

// Rutas                             
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin771',
    component: BackendComponent,
    children:[
    { path: '', redirectTo: 'productos', pathMatch: 'full'},
    { path: 'productos', component: BackendProductsComponent }
    ]
  },
  { path: 'detalle-producto/:id', component: ProductoDetalleComponent },
  { path: 'como-llegar', component: ComoLlegarComponent },
  { path: 'contacto', component: ContactoComponent }
  
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