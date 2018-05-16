import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class SubatributoService {

  constructor( private http: Http) { }

  /**
   * 
   * @param functionPhp get a number to do any function in php: 
   * 
   *  1 = list,
   *  2 = delete,
   *  3 = Store,
   *  4 = Edit
   * 
   * @param s_id id of the seccion
   * @param s_name name of seccion
   * @param s_attribute number of atribute
   */
  
  CrudFunction(functionPhp: number, sa_id: number, sa_nombre: string, sa_attribute:number){
    return this.http.get('php/script/crud-subatributo.php?data='+functionPhp+'&sa_id='+sa_id+'&sa_nombre='+sa_nombre+'&sa_atributo='+sa_attribute);
  }
    getJsonIDSeccion(s_id : number, json){
      return of(json.find(primero => primero.s_id === s_id));
    } 
 
  // CrudFunction(functionPhp: number, nombre: string, atributo:number, id: number){
  //   return this.http.get('php/script/crud-seccion.php?data='+functionPhp+'&id='+id+'&nombre='+nombre+'&atributo='+atributo);
  // }
  listProduct(){
    return this.http.get('php/script/list-producto.php');
  }
  getJsonForName(name:string, json){
    return of(json.find((primero => primero.s_nombre === name)));
  }
  getJsonForAttribute(name:string, json){
    return of(json.find((primero => primero.su_atributo === name)));
  }
  getJsonForID(id, json){
    return of(json.find((primero => primero.p_id === id)));
  }
  getJsonIDSubAtributo(su_id : number, json){
    return of(json.find(primero => primero.su_id === su_id));
  } 
}
