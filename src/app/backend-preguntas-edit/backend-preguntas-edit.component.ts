import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PreguntasService } from '../preguntas.service';
import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-backend-preguntas-edit',
  templateUrl: './backend-preguntas-edit.component.html',
  styleUrls: ['./backend-preguntas-edit.component.css']
})
export class BackendPreguntasEditComponent implements OnInit {

  constructor(private _activatedRoute:ActivatedRoute, private router : Router, private Location : Location, private PreguntasService : PreguntasService ) { }
 
  mensaje;
  responseToSend = new Object();
  responseValue : string = "hola";
   


  handdleMessage(){
    this.responseToSend["id"] = this.mensaje.pr_id;
    this.responseToSend["mensaje"]  = this.mensaje.pr_mensaje;
    this.responseToSend["email"] = this.mensaje.pr_email;
    this.PreguntasService.doResponse(this.responseToSend)
    .subscribe((Data) =>{ 
      console.log(Data)
    });
  }

  ngOnInit() {
    const id = this._activatedRoute.snapshot.paramMap.get('id');
    this.PreguntasService.doList()
    .map((response) => response.json())
    .subscribe((data) => {
      this.PreguntasService.getJsonForID(id,data)
      .subscribe((data) => {
        this.mensaje = data;  
      });
    });
  }

}
