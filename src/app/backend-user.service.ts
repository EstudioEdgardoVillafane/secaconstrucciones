import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable()
export class BackendUserService {

  constructor(private Http : Http) {}

  Conect(Functionphp: number, ub_id : number, ub_user : string, ub_email : string, ub_password : string){
    return this.Http.get('php/script/user-backend.php?data='+Functionphp+'&ub_id='+ub_id+"&ub_user="+ub_user+"&ub_email="+ub_email+"&ub_password="+ub_password);
     //Devuelve el resultado del php como objeto.
  }

  Confirm(Functionphp: number, ub_id : number, Password : string, ub_user : string){
    return this.Http.get('php/script/user-backend.php?data='+Functionphp+'&ub_id='+ub_id+"&Password="+Password+'&ub_user='+ub_user);
     //Devuelve el resultado del php como objeto.
  }
  // validateUser(){
  //   return this.Http.get('php/script/user-backend.php');//cambiar esta direccion si es necesario, le puse esta por que sino no compila
  // }
  getJsonID(ub_id : number, json){
    return of(json.find(primero => primero.ub_id === ub_id));
  } 
  // getJsonUSER(ub_user : string, json){
  //   return of(json.find(primero => primero.ub_user === ub_user));
  // } 

}
