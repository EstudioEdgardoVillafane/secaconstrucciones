import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class EtiquetaService {

  constructor( private http: Http) { }
  listEtiquetas(){
    return this.http.get('php/script/list-etiqueta.php');
  }
  storeEtiqueta(etiqueta){
    return this.http.get('php/script/store-etiqueta.php?nombre='+etiqueta);
  }
  /**
   * This function do a list of reations etiquetas.
   */
  doListJSON(){
    return this.http.get('php/script/list-etiqueta-json.php');
  }
  getJsonForName(name:string, json){
    return of(json.find((primero => primero.e_nombre === name)));
  }
  storeEtiquetaToProduct(idProduct, idEtiqueta){
    return this.http.get('php/script/store-relet.php?rl_producto='+idProduct+'&rl_etiqueta='+idEtiqueta);
  }
}
