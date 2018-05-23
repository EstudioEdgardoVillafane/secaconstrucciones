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
  listProductFront(functionPhp: number, id: number){
    return this.http.get('php/script/list-producto.php?data='+functionPhp+'&id'+id)
  }
  listProduct(){
    return this.http.get('php/script/list-producto.php');
  }
  CrudFunction( id: number){
    return this.http.get('php/script/delete-producto.php?id='+id);
  }
  doFav(id,data){
    return this.http.get('php/script/dofav.php?id='+id+'&data='+data);
  }
  updateOrden(id,orden){
    return this.http.get('php/script/update-orden.php?id='+id+'&orden='+orden)
  }
  getJsonForNameTwo(name,json){
    return of(json.find((primero => primero.p_nombre === name)));
  }
  getJsonForNameT(id,json){
    return of(json.find((primero => primero.p_nombre = id)));
  }
  getJsonForSeccion(id,json){
    return of(json.find((primero => primero.p_section === id)));
  }
  getJsonForId(id,json){
    return of(json.find((primero => primero.p_id === id)));
  }
  duplicateReg(id, nombre, seccion, atributo, subatributo, precio, foto, descripcion){
    return this.http.get('php/script/duplicate-reg.php?id='+id+'&nombre='+nombre+'&seccion='+seccion+'&atributo='+atributo+'&subatributo='+subatributo+'&precio='+precio+'&foto='+foto+'&desc='+descripcion);
  }
  listProductToFront(){
    return this.http.get('php/script/list-product-front.php');
  }
}


 
