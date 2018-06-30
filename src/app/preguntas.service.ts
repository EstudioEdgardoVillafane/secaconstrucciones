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
    return of(json.find((primero => primero.pr_id === id)));
  }
  getJsonForProduct(producto,json){
    return of(json.find((primero => primero.pr_producto === producto)));
  }
  doResponse(dataResponse){
    return this.http.post("php/script/update-pregunta.php", dataResponse);
  }
  doDelete(idResponse){
    return this.http.post("php/script/archivar-response.php", idResponse);
  }
  doAsk(dataMessage){
    return this.http.post('php/script/store-pregunta.php', dataMessage);
  }
  doRow(){
    return this.http.get("php/script/lenght-pregunta.php");
  }
}
