import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class PreguntasService {

  constructor( private http: Http) { }

  CrudFunction(functionPhp: number,pregunta: string, respuesta: string,fecha:string,hora:string,id: number){
    return this.http.get('php/script/crud-preguntas.php?data='+functionPhp+'&id='+id+'&pregunta='+pregunta+'&respuesta='+respuesta+'&fecha='+fecha+'&hora='+hora);
  }

  getJsonID(id : number, json){
    return of(json.find(primero => primero.p_id === id));
  } 

  

}
