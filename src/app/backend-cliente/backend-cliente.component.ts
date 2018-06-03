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
  //listClientes()
  listCliente
  //sendClienteEmail()
  sendClienteEmailObject = new Object;

/**Functions change the templates */
  editPasswordVar = false;
  changeTemplateEditar = true;
  changeTemplateAgregar = false; 

/**Store function vars */
  formClient
  request
  //Alerts
  nameStoreAlert = false;
  nameStore
  lastNameStoreAlert = false;
  lastNameStore;
  provinceStoreAlert = false;
  provinceStore;
  locationStoreAlert = false;
  locationStore;
  neighborhoodStoreAlert = false;
  neighborhoodStore;
  postalCodeStoreAlert = false;
  postalCodeStore;
  userStoreAlert = false;
  userStore;
  emailStoreAlert = false;
  emailStore;  
  passwordStoreAlert = false;
  passwordStore;
  passwordStoreConfirm;
  imageAlert = false;
  imageStore;

 /**Edit functions vars */
  //edit()
  editCliente;
  formEditCliente
  //Alerts
  nameEditAlert = false;
  nameEdit
  lastNameEditAlert = false;
  lastNameEdit;
  provinceEditAlert = false;
  provinceEdit;
  locationEditAlert = false;
  locationEdit;
  neighborhoodEditAlert = false;
  neighborhoodEdit;
  postalCodeEditAlert = false;
  postalCodeEdit;
  userEditAlert = false;  
  userEdit;
  emailEditAlert = false;
  emailEdit;
  passwordEditAlert = false;
  passwordEdit;
  passwordEditConfirm;
  oldPassword;

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
  /**This function send email from validate acount*/
  sendClienteEmail(){
    this.userStore = document.getElementById("userStore");
    this.emailStore = document.getElementById("emailStore");

    this.sendClienteEmailObject["userName"] = this.userStore.value;
    this.sendClienteEmailObject["email"] = this.emailStore.value;

    this.backendClienteSrevice.sendEmailToCliente(this.sendClienteEmailObject["userName"],this.sendClienteEmailObject["email"])
    .subscribe((data)=>{
      console.log(data)
    });
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
    this.userStore = document.getElementById("userStore");
    this.emailStore = document.getElementById("emailStore");
    this.passwordStore = document.getElementById("passwordStore");
    this.passwordStoreConfirm = document.getElementById("passwordStoreConfirm");
    this.imageStore = document.getElementById("imageStore");
    this.nameStore = document.getElementById("nameStore");
    this.lastNameStore = document.getElementById("lastNameStore");
    this.provinceStore = document.getElementById("provinceStore");
    this.locationStore = document.getElementById("locationStore");
    this.neighborhoodStore = document.getElementById("neighborhoodStore");
    this.postalCodeStore = document.getElementById("postalCodeStore");

    //Alerts
    if(this.userStore.value == ""){
      this.userStoreAlert = true;
    }else{
      this.userStoreAlert = false;      
    }
    if(this.nameStore.value == ""){
      this.nameStoreAlert = true;
    }else{
      this.nameStoreAlert = false;
    }
    if(this.lastNameStore.value == ""){
      this.lastNameStoreAlert = true;
    }else{
      this.lastNameStoreAlert = false;      
    }
    if(this.provinceStore.value == ""){ 
      this.provinceStoreAlert = true;
    }else{
      this.provinceStoreAlert = false;
    }
    if(this.locationStore.value == ""){
      this.locationStoreAlert = true;
    }else{
      this.locationStoreAlert = false;
    }
    if(this.neighborhoodStore.value == ""){
      this.neighborhoodStoreAlert = true;
    }else{
      this.neighborhoodStoreAlert = false;      
    }
    if(this.postalCodeStore.value == ""){
      this.postalCodeStoreAlert = true;
    }else{
      this.postalCodeStoreAlert = false;
    }
    if(this.emailStore.value == ""){
      this.emailStoreAlert = true;
    }else{
      this.emailStoreAlert = false;
    }
    if(this.passwordStore.value != this.passwordStoreConfirm.value){
      this.passwordStoreAlert = true;
    }else{
      this.passwordStoreAlert = false;
    }
    if(this.imageStore.value == null){
      this.imageAlert = true;
    }else{
      this.imageAlert = false;
    }
    //validation
    if(this.postalCodeStore.value != "" && 
       this.neighborhoodStore.value != "" && 
       this.locationStore.value != "" && 
       this.provinceStore.value != "" && 
       this.lastNameStore.value != "" && 
       this.nameStore.value != "" && 
       this.userStore.value != "" && 
       this.emailStore.value != "" && 
       this.passwordStore.value != "" && 
       this.imageStore.value != null){

      this.formClient = document.getElementById("formStoreCliente");
      this.request = new XMLHttpRequest();
      this.request.open("POST", "php/script/store-cliente.php");
      console.log(this.request.send(new FormData(this.formClient)));

    }
    this.listClientes();
    this.sendClienteEmail();
  } 
/*--------------------Edit--------------------- */
  /**This function edit the client */
  edit(){
    this.userEdit = document.getElementById("userEdit");
    this.emailEdit = document.getElementById("emailEdit");
    this.passwordEdit = document.getElementById("passwordEdit");
    this.passwordEditConfirm = document.getElementById("passwordEditConfirm");
    this.oldPassword = document.getElementById("oldPassword");
    this.nameEdit = document.getElementById("nameEdit");
    this.lastNameEdit = document.getElementById("lastNameEdit");
    this.provinceEdit = document.getElementById("provinceEdit");
    this.locationEdit = document.getElementById("locationEdit");
    this.neighborhoodEdit = document.getElementById("neighborhoodEdit");
    this.postalCodeEdit = document.getElementById("postalCodeEdit");
    //Alerts
    if(this.userEdit.value =="" ){
      this.userEditAlert = true;
    }else{
      this.userEditAlert = false;
    }
    if(this.emailEdit.value == ""){
      this.emailEditAlert = true;
    }else{
      this.emailEditAlert = false;      
    }
    if(this.nameEdit.value == ""){
      this.nameEditAlert = true;
    }else{
      this.nameEditAlert = false;
    }
    if(this.lastNameEdit.value == ""){
      this.lastNameEditAlert = true;
    }else{
      this.lastNameEditAlert = false;      
    }
    if(this.provinceEdit.value == ""){ 
      this.provinceEditAlert = true;
    }else{
      this.provinceEditAlert = false;
    }
    if(this.locationEdit.value == ""){
      this.locationEditAlert = true;
    }else{
      this.locationEditAlert = false;
    }
    if(this.neighborhoodEdit.value == ""){
      this.neighborhoodEditAlert = true;
    }else{
      this.neighborhoodEditAlert = false;      
    }
    if(this.postalCodeEdit.value == ""){
      this.postalCodeEditAlert = true;
    }else{
      this.postalCodeEditAlert = false;
    }
    //validacion
    if(this.editPasswordVar == false){
      if(this.userEdit.value != "" &&
         this.emailEdit.value != ""&&
         this.postalCodeEdit.value != "" && 
         this.neighborhoodEdit.value != "" && 
         this.locationEdit.value != "" && 
         this.provinceEdit.value != "" && 
         this.lastNameEdit.value != "" && 
         this.nameEdit.value != ""){
console.log("1er if")
        this.formEditCliente = document.getElementById("formEditCliente");
        this.request = new XMLHttpRequest();
        this.request.open("POST", "php/script/edit-cliente.php");
        console.log(this.request.send(new FormData(this.formEditCliente)));
      }
    }else{
      //Alerts
      if(this.passwordEdit.value != this.passwordEditConfirm.value){
        this.passwordEditAlert = true;      
      }else{
        this.passwordEditAlert = false;      
      }
      if(this.userEdit.value != "" && 
         this.emailEdit.value != "" && 
         this.passwordEdit.value != "" &&
         this.oldPassword.value != "" &&
         this.postalCodeEdit.value != "" && 
         this.neighborhoodEdit.value != "" && 
         this.locationEdit.value != "" && 
         this.provinceEdit.value != "" && 
         this.lastNameEdit.value != "" && 
         this.nameEdit.value != ""){
console.log("2do if")
           
        this.formEditCliente = document.getElementById("formEditCliente");
        this.request = new XMLHttpRequest();
        this.request.open("POST", "php/script/edit-cliente.php");
        console.log(this.request.send(new FormData(this.formEditCliente)));
      }
    }
    this.listClientes();    
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
        });
      }
    }
    this.listClientes();
  }


}








