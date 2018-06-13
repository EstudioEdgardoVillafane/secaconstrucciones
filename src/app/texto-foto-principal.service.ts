import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class TextoFotoPrincipalService {

  constructor(private http:Http) { }

  changeImgText(data){
    return this.http.post("php/script/changeprincipalimgtext.php",data);
  }
  
  listImgText(){
    return this.http.get("php/script/update-principal-textimg.php");
  }


}
