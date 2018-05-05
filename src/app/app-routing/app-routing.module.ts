import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

/*                Componentes                       */
import { HomeComponent } from '../home/home.component';
import {BackendComponent} from '../backend/backend.component';
import {BackendProductsComponent} from '../backend-products/backend-products.component';

/*                Rutas                             */
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin771',
    component: BackendComponent,
    children:[
    { path: '', redirectTo: 'productos', pathMatch: 'full'},
    { path: 'productos', component: BackendProductsComponent }
    ]
  }
  
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