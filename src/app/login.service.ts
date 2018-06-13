import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class LoginService {

  constructor(private Http : Http) { }

  Conect(Funct:number,ub_id:number,ub_user: string,ub_password:string){
    
    return this.Http.get('php/script/crud-user.php?data='+Funct+'&ub_id='+ub_id+"&ub_user="+ub_user+"&ub_password="+ub_password);
     //Devuelve el resultado del php como objeto.
  }
  getJsonID(id : number, json){
    return of(json.find(primero => primero.ub_id === id));
  } 
  getJsonUSER(usuario: string, json){
    return of(json.find(primero => primero.ub_user ===usuario));
  } 


}
