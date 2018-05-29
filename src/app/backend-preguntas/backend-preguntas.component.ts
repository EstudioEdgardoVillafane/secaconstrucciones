/**
*  
*******************************************
*** Project Name: Seca Construcciones   ***
*** @Description: Ecomerce              ***
*** @Author: Cristian Hourcade          ***
*** @Tecnology: Angular5                ***
*** @Year: 2018                         ***
*** @Version: 1.0.0                     ***
*******************************************
*
*/


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PreguntasService} from '../preguntas.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { BackendUserService } from '../backend-user.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-backend-preguntas',
  templateUrl: './backend-preguntas.component.html',
  styleUrls: ['./backend-preguntas.component.css']
})
export class BackendPreguntasComponent implements OnInit {
    //these variables are used to change the back-end user table to the form of editing or the form of store
    ChangeTemplateEditar=true;
    ChangeTemplateAgregar=true;

    
    Booleano = true;
    edit;
    edit_preguntas;
    listado;  
    var;
    pregunta;
    respuesta;
    id;
    fecha;
    hora;

    constructor( private PreguntasService:PreguntasService) { }

  ngOnInit() {
    if(localStorage.getItem("keyTwo") != "1"){
     // location.href="../../admin";
    }
    this.Listar();
    
  }
  returnToTheTableUsers(){
    this.ChangeTemplateEditar=true;
    this.ChangeTemplateAgregar=true;
  }
 
//this function take the values of the iputs and send the values of the data base
varaux;
  Edit(p_id : number){
    this.pregunta = document.getElementById("edit_preguntas");
    this.respuesta = document.getElementById("edit_respuestas");
    this.fecha = document.getElementById("edit_fecha");
    this.hora = document.getElementById("edit_hora");
    this.id = document.getElementById("p_id");

  
  
    
     

      
      
        this.PreguntasService.CrudFunction(4,this.pregunta.value,this.respuesta.value,this.fecha.value,this.hora.value,p_id)
        .subscribe((data)=>{ 
          this.var=data;
          //console.log(data);
        
         location.reload();
        
        // this.Listar();

        });
            // this.ListBackendUsers();
          
            //this.Listar();
     
  }
  Listar(){
    this.PreguntasService.CrudFunction(5,"0","0","0","0",0)
    .map((response) => response.json())
    .subscribe((data) => {
      this.listado = data;
      console.log(data)
    });
  }
  ShowEditForm(p_id : number){

    this.ChangeTemplateAgregar=false;
    this.ChangeTemplateEditar=false;
    this.PreguntasService.getJsonID(p_id,this.listado)
    .subscribe(resultado => this.edit_preguntas = resultado);

    
   
  }
 
}
