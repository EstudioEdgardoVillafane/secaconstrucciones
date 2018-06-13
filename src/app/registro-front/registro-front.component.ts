import { Component, OnInit } from '@angular/core';
import { BackendClienteService } from '../backend-cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-front',
  templateUrl: './registro-front.component.html',
  styleUrls: ['./registro-front.component.css']
})
export class RegistroFrontComponent implements OnInit {

  constructor(private registService : BackendClienteService, private router : Router) { }

  varAux; //We can get some element html.
  newCliente = new Object();
  ngOnInit() {
  }

  doNewClient(){
    this.varAux = document.getElementById("nombre");
    this.newCliente["nombre"] = this.varAux.value;
    this.varAux = document.getElementById("apellido");
    this.newCliente["apellido"] = this.varAux.value;
    this.varAux = document.getElementById("email");
    this.newCliente["email"] = this.varAux.value;
    this.varAux = document.getElementById("usuario");
    this.newCliente["usuario"] = this.varAux.value;
    this.varAux = document.getElementById("contra");
    this.newCliente["contra"] = this.varAux.value;
    this.varAux = document.getElementById("provincia");
    this.newCliente["provincia"] = this.varAux.value;
    this.varAux = document.getElementById("localidad");
    this.newCliente["localidad"] = this.varAux.value;
    this.varAux = document.getElementById("barrio");
    this.newCliente["barrio"] = this.varAux.value;
    this.varAux = document.getElementById("cp");
    this.newCliente["cp"] = this.varAux.value;

    console.log(this.newCliente);
    this.registService.storeClient(this.newCliente)
    .subscribe((data) => {
      this.registService.sendEmailToCliente(this.newCliente["nombre"],this.newCliente["email"])
      .subscribe((data) => {
      this.router.navigateByUrl("/home");
      });
    })
  }

}
