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
import { HeaderComponent } from './header/header.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { FooterComponent } from './footer/footer.component';
import { BackendSubatributoComponent } from './backend-subatributo/backend-subatributo.component';
//Services
import { ProductosService } from './productos.service';
import { SeccionService } from './seccion.service';
import { AtributoService } from './atributo.service';
import { LoginService } from './login.service';
import { SubatributoService } from './subatributo.service';
import { BackendUserComponent } from './backend-user/backend-user.component';
import { BackendUserService } from './backend-user.service';
import { BackendAtributoComponent } from './backend-atributo/backend-atributo.component';
import { BackendSeccionComponent } from './backend-seccion/backend-seccion.component';

import { FilterSecctionPipe } from './filter-secction.pipe';
import { SubAtributoService } from './sub-atributo.service';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { PrioritySelectPipe } from './priority-select.pipe';
import { EtiquetaService } from './etiqueta.service';
import { LoginYRegistroComponent } from './login-y-registro/login-y-registro.component';
import { MaquetaComponent } from './maqueta/maqueta.component';
import { SubHomeComponent } from './maqueta/sub-home/sub-home.component';
import { SubFooterComponent } from './maqueta/sub-footer/sub-footer.component';
import { SubHeaderComponent } from './maqueta/sub-header/sub-header.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    BackendProductsComponent,
    BackendComponent,
    BackendUserComponent,
    BackendAtributoComponent,
    FilterSecctionPipe,
    HeaderComponent,
    ProductosComponent,
    ProductoDetalleComponent,
    FooterComponent,
    BackendSeccionComponent,
    BackendSubatributoComponent,
    SubMenuComponent,
    PrioritySelectPipe,
    LoginYRegistroComponent,
    MaquetaComponent,
    SubHomeComponent,
    SubFooterComponent,
    SubHeaderComponent
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
    
  ],
  providers: [SeccionService,AtributoService,BackendUserService,ProductosService,SubatributoService,SubAtributoService,EtiquetaService,LoginService], //Services
  bootstrap: [AppComponent]
})
export class AppModule { }
