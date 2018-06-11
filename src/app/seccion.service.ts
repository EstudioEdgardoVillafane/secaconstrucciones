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
   *  1 = list,
   *  2 = delete,
   *  3 = Store,
   *  4 = Edit
   * 
   * @param s_id id of the seccion
   * @param s_name name of seccion
   * @param s_attribute number of atribute
   */
  
  CrudFunction(functionPhp: number, s_id: number, s_name: string, s_attribute:number){
    return this.http.get('php/script/crud-seccion.php?data='+functionPhp+'&s_id='+s_id+'&s_name='+s_name+'&s_attribute='+s_attribute);
  }
  store(storeObject){
    return this.http.post("php/script/store-seccion.php",storeObject)
  }
    getJsonIDSeccion(s_id : number, json){
      return of(json.find(primero => primero.s_id === s_id));
    } 

  listProduct(){
    return this.http.get('php/script/list-producto.php');
  }
  getJsonForName(name:string, json){
    return of(json.find((primero => primero.s_nombre === name)));
  }
  getJsonForID(id, json){
    return of(json.find((primero => primero.p_id === id)));
  }
}
