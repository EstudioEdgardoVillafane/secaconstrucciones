import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';

//Products
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';
import { BackendProductsComponent } from './backend-products/backend-products.component';
import { BackendComponent } from './backend/backend.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { FooterComponent } from './footer/footer.component';

//Services
import { ProductosService } from './productos.service';
import { SeccionService } from './seccion.service';
import { AtributoService } from './atributo.service';
import { BackendUserComponent } from './backend-user/backend-user.component';
import { BackendUserService } from './backend-user.service';
import { BackendSeccionComponent } from './backend-seccion/backend-seccion.component';
import { FilterSecctionPipe } from './filter-secction.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    BackendProductsComponent,
    BackendComponent,
    BackendUserComponent,
    BackendSeccionComponent
    FilterSecctionPipe,
    SideBarComponent,
    HeaderComponent,
    ProductosComponent,
    ProductoDetalleComponent,
    FooterComponent,
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [SeccionService,AtributoService,BackendUserService,ProductosService], //Services
  bootstrap: [AppComponent]
})
export class AppModule { }
