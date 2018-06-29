import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  constructor(private http : Http) { }

  doList(){
    return this.http.get("php/script/list-pregunta.php");
  }
  getJsonForID(id,json){
    return of(json.find((primero => primero.pr_ir === id)));
  }
}
