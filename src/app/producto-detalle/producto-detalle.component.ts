import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProductosService } from '../productos.service';
import { PreguntasService } from '../preguntas.service';
import {MatSnackBar} from '@angular/material';
import { BackendClienteService } from '../backend-cliente.service';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {


  constructor(private snackBar : MatSnackBar, private clientesService : BackendClienteService, private preguntasService : PreguntasService, private _activatedRoute:ActivatedRoute , private __productosService:ProductosService, private _location:Location) { }
 
  ListOfProducts;
  sendAsk = new Object();
  messageAsk:String = ""; // Is the variable of the input to ask.
  idProduct:number;
  listAsk = new Array();
  ngOnInit() {  
    var html = document.documentElement;
    html.scrollTop = 0;
    this.Listar();
    console.log(localStorage.getItem("usuario-sc"))
    // this.preguntasService.doList()
  }

  /** With this function we are seending the data to the bd */
  handdleAsk(){
    if(this.messageAsk != ""){
    (false) ? this.openSnackBar("Debe estar logeado para poder realizar una pregunta al vendedor", "Ok, entendido!") : this.doAsk();
    }else{
      this.openSnackBar("Escriba una pregunta al vendedor antes de presionar enviar.", "Ok!");
    }
  }


  doAsk(){
    let user = localStorage.getItem("usuario-sc");
    this.clientesService.listClientesInTheTable()
    .map((response) => response.json())
    .subscribe((data) => {
      console.log(data);
      this.clientesService.getJsonName(user,data)
      .subscribe((data) => {
        this.sendAsk["producto"] = this.ListOfProducts.p_id;
        this.sendAsk["mensaje"] = this.messageAsk;
        this.sendAsk["email"] = user;
        this.sendAsk["nombre"] = data.c_nombre;
        this.preguntasService.doAsk(this.sendAsk)
        .subscribe(data => this.doListAsk() );
      });
    });
  }

  /** With this function we can report any error like an alert */
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 6000,
    });
  }

  /** Doing a filter */
  Listar(){
    this.__productosService.listProduct()
    .map((response) => response.json())
    .subscribe((data) => { 
      const slug = this._activatedRoute.snapshot.paramMap.get('slug');
      this.__productosService.getJsonForSlug(slug,data)
      .subscribe((resultado) => { 
        this.ListOfProducts = resultado;
        this.doListAsk();
        });
      });
  
  }

  doListAsk(){
    this.preguntasService.doList()
    .map((response) => response.json())
    .subscribe((data) => {
      let count = 0;
      for(let i in data){
        if(data[i].pr_producto == this.ListOfProducts.p_id){
          this.listAsk[count] = data[i];
          count++;
        }
      }
    });
  }
}
