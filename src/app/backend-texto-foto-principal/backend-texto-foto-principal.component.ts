import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { catchError, map, tap } from 'rxjs/operators';
import { isNull } from 'util';
import { TextoFotoPrincipalService } from '../texto-foto-principal.service';


@Component({
  selector: 'app-backend-texto-foto-principal',
  templateUrl: './backend-texto-foto-principal.component.html',
  styleUrls: ['./backend-texto-foto-principal.component.css']
})
export class BackendTextoFotoPrincipalComponent implements OnInit {

  constructor(private TextoFotoPrincipalService:TextoFotoPrincipalService) { }

  ngOnInit() {
    this.listPrincipalImgText();
  }

  principalImgText = new Object;
  p_text;
  p_img;
  updateNewTextImg(){
    this.p_text = document.getElementById("principalText");
    this.p_img = document.getElementById("principalImg");
    
    if (this.p_text.value == ""){}
    if (this.p_img.value == ""){}

    this.principalImgText["img"] = this.p_img.value;
    this.principalImgText["text"] = this.p_text.value;

    this.TextoFotoPrincipalService.changeImgText(this.principalImgText)
  .subscribe((data) => {
    console.log(data);
  });
  }
  updateimgtext;
  listPrincipalImgText(){
    this.TextoFotoPrincipalService.listImgText()
    .map((Response) => Response.json())
    .subscribe((data) => {
      console.log(data);
      this.updateimgtext = data;
  });
  }

}

