import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';
import { BackendProductsComponent } from './backend-products/backend-products.component';
import { BackendComponent } from './backend/backend.component';
import { SeccionService } from './seccion.service';
import { AtributoService } from './atributo.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    BackendProductsComponent,
    BackendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [SeccionService,AtributoService], //Services
  bootstrap: [AppComponent]
})
export class AppModule { }
