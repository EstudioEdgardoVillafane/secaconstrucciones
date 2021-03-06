import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class BackendClienteService {

  constructor(private http: Http) { }

  /**This function list the clients in the table */
  listClientesInTheTable(){
    return this.http.get('php/script/list-cliente.php');
  }
  /**The function "delete()" in the "backend-cliente.ts" call this fuction to delet clients in the db*/
  deleteClient(id : number){
    return this.http.get('php/script/delete-cliente.php?id='+id)
  }
  /**the fuction "showEditForm()" call this function to edit clients */
  getJsonID(id : number,json){
    return of(json.find(cliente => cliente.c_id === id));
  }
  getJsonName(email, json){
    return of(json.find(cliente => cliente.c_email === email));
  }
  /**This function send email from client */
  sendEmailToCliente(userName : string,email : string){
    return this.http.get('php/script/send-mail-validate.php?userName='+userName+'&email='+email);
  }
  /** We are searching any user and password to do a validation */
  generateValidationOfUser(Object){
    return this.http.post("php/script/client-login.php",Object);
  }
  /**This function send parameter from php to validate acount */
  validationAcout(validationCode : string){
    return this.http.get('php/script/validation-acout.php?validationCode='+validationCode);
  }
  storeClient(Object){
    return this.http.post('php/script/new-client.php', Object);
  }
}
