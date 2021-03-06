import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
// import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';

// Products
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
import { BackendAtributoComponent } from './backend-atributo/backend-atributo.component';
import { BackendSeccionComponent } from './backend-seccion/backend-seccion.component';
import { BackendUserComponent } from './backend-user/backend-user.component';
import { BackendClienteComponent } from './backend-cliente/backend-cliente.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
// Services
import { ProductosService } from './productos.service';
import { SeccionService } from './seccion.service';
import { AtributoService } from './atributo.service';
import { LoginService } from './login.service';
import { SubatributoService } from './subatributo.service';
import { BackendUserService } from './backend-user.service';
import { SubAtributoService } from './sub-atributo.service';
import { EtiquetaService } from './etiqueta.service';
import { BackendClienteService } from './backend-cliente.service';
import {TextoFotoPrincipalService} from './texto-foto-principal.service';

import { FilterSecctionPipe } from './filter-secction.pipe';
import { PrioritySelectPipe } from './priority-select.pipe';
import { ValidacionClienteComponent } from './validacion-cliente/validacion-cliente.component';
import { LoginYRegistroComponent } from './login-y-registro/login-y-registro.component';
import { MaquetaComponent } from './maqueta/maqueta.component';
import { SubHomeComponent } from './maqueta/sub-home/sub-home.component';
import { SubFooterComponent } from './maqueta/sub-footer/sub-footer.component';
import { SubHeaderComponent } from './maqueta/sub-header/sub-header.component';

import { ProductoEtiquetaComponent } from './producto-etiqueta/producto-etiqueta.component';
import { MostrarMitadStringPipe } from './mostrar-mitad-string.pipe';
import { ProductoFiltradoComponent } from './producto-filtrado/producto-filtrado.component';
import { ProductoCategoriaComponent } from './producto-categoria/producto-categoria.component';
import { ProductoBusquedaComponent } from './producto-busqueda/producto-busqueda.component';
import { BackendTextoFotoPrincipalComponent } from './backend-texto-foto-principal/backend-texto-foto-principal.component';
import { LoginFrontComponent } from './login-front/login-front.component';
import { RegistroFrontComponent } from './registro-front/registro-front.component';
import { MasCategoriaComponent } from './mas-categoria/mas-categoria.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatFormFieldModule,
  matFormFieldAnimations,
} from '@angular/material';
import { BackendPreguntasComponent } from './backend-preguntas/backend-preguntas.component';
import { BackendPreguntasEditComponent } from './backend-preguntas-edit/backend-preguntas-edit.component';

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
    BackendClienteComponent,
    ValidacionClienteComponent,
    LoginYRegistroComponent,
    MaquetaComponent,
    SubHomeComponent,
    SubFooterComponent,
    SubHeaderComponent,
    ProductoEtiquetaComponent,
    MostrarMitadStringPipe,
    ProductoFiltradoComponent,
    ProductoCategoriaComponent,
    ProductoBusquedaComponent,
    BackendTextoFotoPrincipalComponent,
    LoginFrontComponent,
    RegistroFrontComponent,
    MasCategoriaComponent,
    BackendPreguntasComponent,
    BackendPreguntasEditComponent
  ],
  imports: [
    MatChipsModule,
    MatTreeModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatBadgeModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule
  ],
  providers: [
    SeccionService,
    AtributoService,
    BackendUserService,
    ProductosService,
    SubatributoService,
    SubAtributoService,
    EtiquetaService,
    LoginService,
    BackendClienteService,
    TextoFotoPrincipalService], // Services
  bootstrap: [AppComponent]
})
export class AppModule { }
