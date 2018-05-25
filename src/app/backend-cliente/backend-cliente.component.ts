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
/**Services*/
import { BackendClienteService } from './../backend-cliente.service';

@Component({
  selector: 'app-backend-cliente',
  templateUrl: './backend-cliente.component.html',
  styleUrls: ['./backend-cliente.component.css']
})
export class BackendClienteComponent implements OnInit {
/**Functions Generics vars */
//alerts()
  userStoreAlert = false;
  userStore;
  userEditAlert = false;  
  userEdit;
  emailStoreAlert = false;
  emailStore;  
  emailEditAlert = false;
  emailEdit;
  passwordStoreAlert = false;
  passwordStore;
  passwordStoreConfirm;
  passwordEditAlert = false;
  passwordEdit;
  passwordEditConfirm;
  oldPassword;
  imageAlert = false;
  imageStore;

  //listClientes()
  listCliente
/**Functions change the templates */
  editPasswordVar = false;
  changeTemplateEditar = true;
  changeTemplateAgregar = false; 
/**Store function vars */
  formClient
  request
/**Edit functions vars */
  editCliente;
  formEditCliente
/*Delete fuctions vars */
//check()
  Booleano = true;
  NumberAux = 0;
  CheckAcumulador = new Array();
  i = 0;
//delete() 
  aux;

  constructor(private backendClienteSrevice : BackendClienteService) { }

  ngOnInit() {
    this.listClientes();
  }

/*------- Generic Functions------*/
/**This function list the clients on the table*/  
  listClientes(){
    this.backendClienteSrevice.listClientesInTheTable()
    .map((response) => response.json())
    .subscribe((data)=>{
      this.listCliente = data;
    })
  }
/**When the variables are true, show the alerts in the frontend */
  alerts(){
//Store
    this.userStore = document.getElementById("userStore");
    this.emailStore = document.getElementById("emailStore");
    this.passwordStore = document.getElementById("passwordStore");
    this.passwordStoreConfirm = document.getElementById("passwordStoreConfirm");
    this.imageStore = document.getElementById("imageStore");
//Edit
    this.userEdit = document.getElementById("userEdit");
    this.emailEdit = document.getElementById("emailEdit");
    this.passwordEdit = document.getElementById("passwordEdit");
    this.passwordEditConfirm = document.getElementById("passwordEditConfirm");
    this.oldPassword = document.getElementById("oldPassword")
    

    if(this.userStore.value == "" || this.userEdit.value ==""){
      this.userStoreAlert = true;
      this.userEditAlert = true;      
    }else{
      this.userStoreAlert = false;      
      this.userEditAlert = false;
    }
    if(this.emailStore.value == "" || this.emailEdit.value == ""){
      this.emailStoreAlert = true;
      this.emailEditAlert = true;
    }else{
      this.emailStoreAlert = false;
      this.emailEditAlert = false;      
    }
    if(this.passwordStore.value != this.passwordStoreConfirm.value || this.passwordEdit.value != this.passwordEditConfirm.value){
      this.passwordStoreAlert = true;
      this.passwordEditAlert = true;
    }else{
      this.passwordStoreAlert = false;
      this.passwordEditAlert = false;
    }
    if(this.imageStore.value == null){
      this.imageAlert = true;
    }else{
      this.imageAlert = false;
    }
  }
/** --------------This functions change the templates------------ */
/*this function show the Store form*/
  showStoreForm(){
    this.changeTemplateEditar= false;
  }

/*this funtion returns of the backend users table*/
  returnToTheTableUsers(){
    this.changeTemplateEditar = true;
    this.changeTemplateAgregar = true;
    this.editPasswordVar = false;
    this.userStoreAlert = false;
    this.userEditAlert = false;
    this.emailStoreAlert = false;
    this.emailEditAlert = false;
    this.passwordStoreAlert = false;
    this.passwordEditAlert = false;
    this.imageAlert = false;
    }
/**This function show the edit form */
  showEditForm(c_id : number){
    this.changeTemplateAgregar=false;
    this.changeTemplateEditar=false;
    this.backendClienteSrevice.getJsonID(c_id,this.listCliente)
    .subscribe(resultado => this.editCliente = resultado);
  }
  /*--------------------Store-------------------- */
  
/**This funtion add the new client in the db  */
  store(){
    this.alerts();
    if(this.userStore.value != "" && this.emailStore.value != "" && this.passwordStore.value != "" && this.imageStore.value != null){
      this.formClient = document.getElementById("formStoreCliente");
      this.request = new XMLHttpRequest();
      this.request.open("POST", "php/script/store-cliente.php");
      console.log(this.request.send(new FormData(this.formClient)));
      this.listClientes();
    }
  }
  
  /*--------------------Edit--------------------- */
  /**This function edit the client */
  edit(){
    this.alerts();
    if(this.editPasswordVar == true){
      if(this.userEdit.value != "" && this.emailEdit.value != "" && this.passwordEdit.value != "" && this.oldPassword.value != ""){
        this.formEditCliente = document.getElementById("formEditCliente");
        this.request = new XMLHttpRequest();
        this.request.open("POST", "php/script/edit-cliente.php");
        console.log(this.request.send(new FormData(this.formEditCliente)));
        this.listClientes();
      } 
    }else{
      if(this.userEdit.value != "" && this.emailEdit.value != "" && this.passwordEdit.value != "" ){
        this.formEditCliente = document.getElementById("formEditCliente");
        this.request = new XMLHttpRequest();
        this.request.open("POST", "php/script/edit-cliente.php");
        console.log(this.request.send(new FormData(this.formEditCliente)));
        this.listClientes();
      }
    }
  }   
/**When you press the "cambiar contraseña" in the edit form, this function show input from edit pasword */
  editPassword(){
    this.editPasswordVar = true;
  }  
/*------------------Delete--------------------- */
/**this function accumulates the checks that are in the table to be deleted later*/
  checkBox(c_id : number){
    this.Booleano=true;
    console.log("Contador: " + this.NumberAux);
    if(this.NumberAux == 0){
      this.CheckAcumulador[0] = c_id;
      this.NumberAux++;
      console.log("Primer numero en la lista: " + c_id)
    }else{
      for(this.i = 0; this.i<this.NumberAux ; this.i++){
        if(c_id == this.CheckAcumulador[this.i]){
          this.CheckAcumulador.splice(this.i, 1);
          this.Booleano = false;
          console.log("El numero: " + c_id + " está en la posicion: " + this.i);
          this.NumberAux++;
        }
      }
      if(this.Booleano){
        this.CheckAcumulador[this.NumberAux] = c_id;
        console.log("Se agrego en el numero: " + c_id + ", en la posicion: " + this.NumberAux);
        this.NumberAux++;
      }
    }
  }

/** this function delete the backend users of the table that are select whith the check*/
  delete(){
    for(this.i=0; this.i<this.NumberAux; this.i++){
      if(this.CheckAcumulador[this.i] == undefined){
      console.log("Indefinido");
      }else{
        this.backendClienteSrevice.deleteClient(this.CheckAcumulador[this.i])
        .subscribe((data) => {
        this.aux = data;
        console.log(data);
        this.listClientes();
        });
      }
    }
  }


}








