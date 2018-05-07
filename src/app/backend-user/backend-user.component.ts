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
import { BackendUserService } from '../backend-user.service';

@Component({
  selector: 'app-backend-user',
  templateUrl: './backend-user.component.html',
  styleUrls: ['./backend-user.component.css']
})
export class BackendUserComponent implements OnInit {

  //these variables are used to change the back-end user table to the form of editing or the form of store
  ChangeTemplateEditar=true;
  ChangeTemplateAgregar=true;

  //these variables are used to take the value of the id of the inputs in the HTML
  //store
  ub_user;
  ub_email;
  ub_password;
  ConfirmPassword;

  //edit
  ConfirmNewPassword;
  Password;
  ub_id;

  Listed;
//the function of these boleans are for validation alerts
  AlertUser = false;
  AlertMail = false;
  AlertPassword = false;
  AlertConfirmPassword = false;
  AlertNewPassword = false;


  EditPasswordVar = false;

  var;
  CheckAcumulador = new Array();
  NumberAux=0;
  PositionAux = 0;
  i=0;
  Booleano = true;
  edit;
  edit_userb;
  listado;
  constructor( private BackendUserService : BackendUserService ) { }

  ngOnInit() {
    if(localStorage.getItem("keyTwo") != "1"){
     // location.href="../../admin";
    }
    this.Listar();
  }

  EditPassword(){
    this.EditPasswordVar = true;
  }

//this function show the Store form
  ShowStoreForm(){
    this.ChangeTemplateEditar= false;
  }

//this funtion show the edit form and send the values of the data base in to the inputs of the forms
  ShowEditForm(ub_id : number){
    this.ChangeTemplateAgregar=false;
    this.ChangeTemplateEditar=false;
    this.BackendUserService.getJsonID(ub_id,this.listado)
    .subscribe(resultado => this.edit_userb = resultado);
  }

//this funtion returns of the backend users table
  ReturnToTheTableUsers(){
    this.ChangeTemplateEditar=true;
    this.ChangeTemplateAgregar=true;
    this.EditPasswordVar = false;
  }


  // Listar(){
  //   this.BackendUserService.validateUser().subscribe((data) => {
  //     console.log(data.text());
  //       this.BackendUserService.Conect(5,0,"0","0","0")
  //         .map((response) => response.json())
  //         .subscribe((data) => {
  //         this.listado = data;
  //       });
  //    });
  // }
    Listar(){
        this.BackendUserService.Conect(5,0,"0","0","0")
        .map((response) => response.json())
        .subscribe((data) => {
          this.listado = data;
        });
      }
//this function take the values of the iputs and send the values of the data base
  Edit(ub_id : number){
    this.ub_user = document.getElementById("edit_usuario");
    this.ub_email = document.getElementById("edit_mail");
    this.ub_password = document.getElementById("NewPassword");
    this.ConfirmNewPassword = document.getElementById("ConfirmNewPassword");
    this.Password = document.getElementById("Password");
    this.ub_id = document.getElementById("ub_id");
//when don´t press the button " cambiar contrasena" in the edit form
    if(this.EditPasswordVar == false ){

      if(this.ub_user.value == ""){
        this.AlertUser = true;
      }else{
        this.AlertUser = false;
      }

      if(this.ub_email.value == ""){
        this.AlertMail = true;
      }else{
        this.AlertMail = false;
      }
      if(this.ub_user.value != "" && this.ub_email.value != ""){
        this.BackendUserService.Conect(7,ub_id,this.ub_user.value,this.ub_email.value,"0")
        .subscribe((data)=>{ this.var=data;});
            // this.ListBackendUsers();
          //location.reload();
        }
//when press the button " cambiar contrasena" in the edit form
    }else if(this.EditPasswordVar == true){

      if(this.ub_user.value == ""){
        this.AlertUser = true;
      }else{
        this.AlertUser = false;
      }

      if(this.ub_email.value == ""){
        this.AlertMail = true;
      }else{
        this.AlertMail = false;
      }

      if(this.ub_password.value != this.ConfirmNewPassword.value){
        this.AlertNewPassword = true;
      }else{
        this.AlertNewPassword = false;
      }

      if(this.Password.value == ""){
        this.AlertPassword = true;
      }else{
        this.AlertPassword = false;
      }

      if(this.ub_user.value != "" && this.ub_email.value != "" && this.ub_password.value == this.ConfirmNewPassword.value && this.ub_password != "" && this.Password.value != ""){
        this.BackendUserService.Confirm(8,ub_id,this.Password.value,"0")
        .subscribe((data)=>{
          console.log(data.text());
          if(data.text() == " 0"){
            this.AlertPassword = true;
          }else{
              this.BackendUserService.Conect(4,ub_id,this.ub_user.value,this.ub_email.value,this.ub_password.value)
              .subscribe((data)=>{ this.var=data;});
   //           location.reload();

          }
        });
        }
     }
  }
// this function accumulates the checks that are in the table to be deleted later
  Check(ub_id : number){
     this.Booleano=true;
    console.log("Contador: " + this.NumberAux);
    if(this.NumberAux == 0){
      this.CheckAcumulador[0] = ub_id;
      this.NumberAux++;
      console.log("Primer numero en la lista: " + ub_id)
    }else{
      for(this.i = 0; this.i<this.NumberAux ; this.i++){
        if(ub_id == this.CheckAcumulador[this.i]){
          this.CheckAcumulador.splice(this.i, 1);
          this.Booleano = false;
          console.log("El numero: " + ub_id + " está en la posicion: " + this.i);
          this.NumberAux++;
        }
      }
      if(this.Booleano){
          this.CheckAcumulador[this.NumberAux] = ub_id;
          console.log("Se agrego en el numero: " + ub_id + ", en la posicion: " + this.NumberAux);
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
        this.BackendUserService.Conect(2, this.CheckAcumulador[this.i],"0","0","0")
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
    this.ub_user = document.getElementById("ub_user");
    this.ub_email = document.getElementById("ub_email");
    this.ub_password = document.getElementById("ub_password");
    this.ConfirmPassword = document.getElementById("ConfirmPassword");

    if(this.ub_user.value == ""){
      this.AlertUser = true;
    }else{
      this.AlertUser = false;
    }
    if(this.ub_email.value == "" ){
      this.AlertMail = true;
    }else{
      this.AlertMail = false;
    }
    if(this.ub_password.value != this.ConfirmPassword.value){
      this.AlertPassword = true;
    }else{
      this.AlertPassword = false;
    }
    if(this.ub_user.value != "" && this.ub_email.value != "" && this.ub_password.value == this.ConfirmPassword.value && this.ub_password.value != "" && this.ConfirmPassword.value != "" ){

      this.BackendUserService.Conect(
        3,
        0,
        this.ub_user.value,
        this.ub_email.value,
        this.ub_password.value
      )
      .subscribe((result)=>{this.var=result;});
      // this.ListBackendUsers();
      location.reload();

      this.ChangeTemplateEditar=true;
    }else{
      console.log("Falla al agregar");
    }
    }


}
