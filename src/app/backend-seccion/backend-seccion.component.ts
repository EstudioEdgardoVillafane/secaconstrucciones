/**
*
*******************************************
*** Project Name: Seca Construcciones   ***
*** @Description: Ecomerce              ***
*** @Author: Matias Balboa              ***
*** @Tecnology: Angular5                ***
*** @Year: 2018                         ***
*** @Version: 1.0.0                     ***
*******************************************
*
*/

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { catchError, map, tap } from 'rxjs/operators';
import { SeccionService } from '../seccion.service';

@Component({
  selector: 'app-backend-seccion',
  templateUrl: './backend-seccion.component.html',
  styleUrls: ['./backend-seccion.component.css']
})
export class BackendSeccionComponent implements OnInit {


  //these variables are used to change the back-end user table to the form of editing or the form of store
  ChangeTemplateEditar=true;
  ChangeTemplateAgregar=true;

  //these variables are used to take the value of the id of the inputs in the HTML
  //store
  s_name;
  s_attribute;

  //these variable used to listed
  Listed;
  
//the function of these boleans are for validation alerts
  AlertName = false;
  AlertAttribute = false;

  var;
  CheckAcumulador = new Array();
  NumberAux=0;
  PositionAux = 0;
  i=0;
  Booleano = true;
  edit;
  edit_seccion
  listado;
  constructor( private SeccionService : SeccionService ) { }

  ngOnInit() {
    // if(localStorage.getItem("keyTwo") != "1"){
    //  // location.href="../../admin";
    // }
    this.Listar();
  }

//this function show the Store form
  ShowStoreForm(){
    this.ChangeTemplateEditar= false;
  }

//this funtion show the edit form and send the values of the data base in to the inputs of the forms
  ShowEditForm(s_id : number){
    this.ChangeTemplateAgregar=false;
    this.ChangeTemplateEditar=false;
    this.SeccionService.getJsonForID(s_id,this.listado)
    .subscribe(resultado => this.edit_seccion = resultado);
}

//this funtion returns of the backend users table
  ReturnToTheTableUsers(){
    this.ChangeTemplateEditar=true;
    this.ChangeTemplateAgregar=true;
  }



  Listar(){
      this.SeccionService.CrudFunction(1,0,"0",0)
      .map((response) => response.json())
      .subscribe((data) => {
        this.listado = data;
      });
    }

//this function take the values of the iputs and send the values of the data base
  Edit(s_id : number){
    this.s_name = document.getElementById("edit_name");
//    this.s_attribute = document.getElementById("edit_mail");

      if(this.s_name.value == ""){
        this.AlertName = true;
      }else{
        this.AlertName = false;
      }
      // if(this.s_attribute.value == ""){
      //   this.AlertAttribute = true;
      // }else{
      //   this.AlertAttribute = false;
      // }
      if(this.s_name.value != ""){
        this.SeccionService.CrudFunction(4,s_id,this.s_name.value,0)
        .subscribe((data)=>{ this.var=data;});
            // this.ListBackendUsers();
          location.reload();
        }
    
  }

// this function accumulates the checks that are in the table to be deleted later
  Check(s_id : number){
     this.Booleano=true;
    console.log("Contador: " + this.NumberAux);
    if(this.NumberAux == 0){
      this.CheckAcumulador[0] = s_id;
      this.NumberAux++;
      console.log("Primer numero en la lista: " + s_id)
    }else{
      for(this.i = 0; this.i<this.NumberAux ; this.i++){
        if(s_id == this.CheckAcumulador[this.i]){
          this.CheckAcumulador.splice(this.i, 1);
          this.Booleano = false;
          console.log("El numero: " + s_id + " está en la posicion: " + this.i);
          this.NumberAux++;
        }
      }
      if(this.Booleano){
          this.CheckAcumulador[this.NumberAux] = s_id;
          console.log("Se agrego en el numero: " + s_id + ", en la posicion: " + this.NumberAux);
          this.NumberAux++;
        }
      }
    }

// this function delete the backend users of the table that are select whith the chek
  Delete(){
    for(this.i=0; this.i<this.NumberAux; this.i++){
      if(this.CheckAcumulador[this.i] == undefined){
        console.log("Indefinido");
      }else{
        this.SeccionService.CrudFunction(2, this.CheckAcumulador[this.i],"0",0)
        .subscribe((data) => {
          this.var = data;
          console.log(data);
        });
        // location.reload();
      }

  }
    this.Listar();
  }

//this function add users in to the data base
  Store(){
    this.s_name = document.getElementById("s_name");
    // this.s_attribute = document.getElementById("s_attribute");


    if(this.s_name.value == ""){
      this.AlertName = true;
    }else{
      this.AlertName = false;
    }
    // if(this.s_attribute.value == "" ){
    //   this.AlertAttribute = true;
    // }else{
    //   this.AlertAttribute = false;
    // }
    if(this.s_name.value != "" ){

      this.SeccionService.CrudFunction(
        3,
        0,
        this.s_name.value,
        0)
      .subscribe((result)=>{this.var=result;});
      // this.ListBackendUsers();
      location.reload();

      this.ChangeTemplateEditar=true;
    }else{
      console.log("Falla al agregar");
    }
    }


}
