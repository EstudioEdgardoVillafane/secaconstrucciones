import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class SeccionService {

  constructor( private http: Http) { }

  /**
   * 
   * @param functionPhp get a number to do any function in php: 
   * 
   *  1 = list
   *  2 = delete
   *  3 = edit
   *  4 = store
   * 
   * @param nombre name of seccion
   * @param atributo number of atribute
   * @param id id of the seccion
   */

  CrudFunction(functionPhp: number, nombre: string, atributo:number, id: number){
    return this.http.get('php/script/crud-seccion.php?data='+functionPhp+'&id='+id+'&nombre='+nombre+'&atributo='+atributo);
  }
  getJsonForName(name:string, json){
    return of(json.find((primero => primero.s_nombre === name)));
  }
}
