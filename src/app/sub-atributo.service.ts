import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class SubAtributoService {

  constructor(private http: Http) { }

    /**
   * 
   * @param functionPhp get a number to do any function in php: 
   * 
   *  1 = list,
   *  2 = delete,
   *  3 = Store,
   *  4 = Edit
   * 
   * @param sa_id id of the subattribute
   * @param sa_name name of subsattributte
   * @param sa_idattribute number of atribute
   */
  
   CrudFunction(functionPhp: number, sa_id: number, sa_name: string, sa_idattribute:number){
      return this.http.get('php/script/crud-subatributo.php?data='+functionPhp+'&sa_id='+sa_id+'&sa_name='+sa_name+'&sa_idattribute='+sa_idattribute);
  }

  getJsonIDSubAtributo(sa_id : number, json){
    return of(json.find(primero => primero.sa_id === sa_id));
  } 
}
