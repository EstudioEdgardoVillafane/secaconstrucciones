import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class EtiquetaService {

  constructor( private http: Http) { }
  listEtiquetas(){
    return this.http.get('php/script/list-etiqueta.php');
  }
  storeEtiqueta(etiqueta){
    return this.http.get('php/script/store-etiqueta.php?nombre='+etiqueta);
  }
  getJsonForName(name:string, json){
    return of(json.find((primero => primero.e_nombre === name)));
  }
}