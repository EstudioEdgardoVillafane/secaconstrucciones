import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ProductosService {

  constructor(private http: Http) { }

  listProduct(){
    return this.http.get('php/script/list-producto.php');
  }
  CrudFunction( id: number){
    return this.http.get('php/script/delete-producto.php?id='+id);
  }
  getJsonForNameTwo(name,json){
    return of(json.find((primero => primero.p_nombre === name)));
  }
}


 
