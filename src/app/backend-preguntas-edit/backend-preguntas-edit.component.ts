import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PreguntasService } from '../preguntas.service';

@Component({
  selector: 'app-backend-preguntas-edit',
  templateUrl: './backend-preguntas-edit.component.html',
  styleUrls: ['./backend-preguntas-edit.component.css']
})
export class BackendPreguntasEditComponent implements OnInit {

  constructor(private _activatedRoute:ActivatedRoute, private router : Router, private Location : Location, private PreguntasService : PreguntasService ) { }
 
  mensaje;

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
