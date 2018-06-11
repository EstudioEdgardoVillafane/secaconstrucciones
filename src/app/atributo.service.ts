import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class AtributoService {

  constructor( private http: Http) { }

  
  CrudFunction(functionPhp: number, nombre: string, seccion:number, id: number){
    return this.http.get('php/script/crud-atributo.php?data='+functionPhp+'&id='+id+'&nombre='+nombre+'&seccion='+seccion);
  }

  getJsonID(id : number, json){
    return of(json.find(primero => primero.a_id === id));
  } 
  getJsonForName(name:string, json){
    return of(json.find((primero => primero.a_nombre === name)));
  }
  getJsonForSeccion(idseccion, json){
    return of(json.find((primero => primero.a_seccion === idseccion)));
  }
  
}
