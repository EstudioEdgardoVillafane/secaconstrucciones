import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { catchError, map, tap } from 'rxjs/operators';
import { SubAtributoService } from '../sub-atributo.service';
import { AtributoService } from '../atributo.service'

@Component({
  selector: 'app-backend-subatributo',
  templateUrl: './backend-subatributo.component.html',
  styleUrls: ['./backend-subatributo.component.css']
})
export class BackendSubatributoComponent implements OnInit {

  //these variables are used to change the back-end user table to the form of editing or the form of store
  ChangeTemplateEditar=true;
  ChangeTemplateAgregar=true;

  //these variables are used to take the value of the id of the inputs in the HTML
  //store
  sa_name;
  sa_attribute;

  //these variable used to listed
  Listed;
  
//the function of these boleans are for validation alerts
  AlertName = false;
  AlertAttribute = false;
//the functioon filter
  searchAtributte
  listAtributte
  auxVar
//atributteClicked
nameAtribute
nameAtributeToAdd
atributoList

  listadoAtributo;
  var;
  CheckAcumulador = new Array();
  NumberAux=0;
  PositionAux = 0;
  i=0;
  Booleano = true;
  edit;
  edit_subAttribute
  listado;
  constructor( private SubAtributoService : SubAtributoService , private AtributoService : AtributoService ) { }

  ngOnInit() {
    // if(localStorage.getItem("keyTwo") != "1"){
    //  // location.href="../../admin";
    // }
    this.Listar();
    this.listedAttributes();
  }

//this function show the Store form
  ShowStoreForm(){
    this.ChangeTemplateEditar= false;
  }

//this funtion show the edit form and send the values of the data base in to the inputs of the forms
  ShowEditForm(sa_id : number){
    this.ChangeTemplateAgregar=false;
    this.ChangeTemplateEditar=false;
    this.SubAtributoService.getJsonIDSubAtributo(sa_id,this.listado)
    .subscribe(resultado => this.edit_subAttribute = resultado);
}

//this funtion returns of the backend users table
  ReturnToTheTableUsers(){
    this.ChangeTemplateEditar=true;
    this.ChangeTemplateAgregar=true;
  }

  Listar(){
      this.SubAtributoService.CrudFunction(1,0,"0",0)
       .map((response) => response.json())
      .subscribe((data) => {
        console.log(data);
        this.listado = data;
      });
    }

    filterAtributte(value){
      this.searchAtributte = document.getElementById("searchAttribute");
      for(this.i=0; this.i <this.listAtributte.length ; this.i++){//listAtributte vielve en secctionClicked
        if(this.listAtributte[this.i].a_nombre.mactch(this.searchAtributte.value)){
          console.log("este va"+this.listAtributte[this.i].a_nombre);
          this.auxVar = document.getElementById("cont"+this.listAtributte[this.i].a_id);
          this.auxVar.style.display = "none";
        }else{
          this.auxVar = document.getElementById ("cont"+this.listAtributte[this.i].a_id);
          console.log(this.auxVar.value);
          this.auxVar.style.display = "none";
        }
      }
    }

    listedAttributes(){
      this.AtributoService.CrudFunction(1,"0",0,1)
       .map((response) => response.json())
      .subscribe((data) => {
        this.listAtributte = data;
      });
    }
Aux;
    atributoClicked(idAtributte : string){
      document.getElementById(idAtributte).style.backgroundColor = '#80ff80';
      this.nameAtribute = document.getElementById(idAtributte);
      this.nameAtributeToAdd = document.getElementById("searchAttribute");
      document.getElementById("searchAttribute");
      console.log(this.nameAtributeToAdd.value);
      console.log(this.nameAtribute.value);
      this.nameAtributeToAdd.disabled = true
      this.nameAtributeToAdd.value = this.nameAtribute.value; 
      this.AtributoService.getJsonForName(this.nameAtribute.value,this.listAtributte)
      .subscribe(result => this.Aux = result );
      this.atributoList(this.Aux.a_id);
    }

//this function take the values of the iputs and send the values of the data base
  Edit(sa_id : number){
    this.sa_name = document.getElementById("edit_name");
//    this.s_attribute = document.getElementById("edit_mail");

      if(this.sa_name.value == ""){
        this.AlertName = true;
      }else{
        this.AlertName = false;
      }
      // if(this.s_attribute.value == ""){
      //   this.AlertAttribute = true;
      // }else{
      //   this.AlertAttribute = false;
      // }
      if(this.sa_name.value != ""){
        this.SubAtributoService.CrudFunction(4,sa_id,this.sa_name.value,0)
        .subscribe((data)=>{ this.var=data;});
            // this.ListBackendUsers();
          location.reload();
        }
    
  }

// this function accumulates the checks that are in the table to be deleted later
  Check(sa_id : number){
     this.Booleano=true;
    console.log("Contador: " + this.NumberAux);
    if(this.NumberAux == 0){
      this.CheckAcumulador[0] = sa_id;
      this.NumberAux++;
      console.log("Primer numero en la lista: " + sa_id)
    }else{
      for(this.i = 0; this.i<this.NumberAux ; this.i++){
        if(sa_id == this.CheckAcumulador[this.i]){
          this.CheckAcumulador.splice(this.i, 1);
          this.Booleano = false;
          console.log("El numero: " + sa_id + " está en la posicion: " + this.i);
          this.NumberAux++;
        }
      }
      if(this.Booleano){
          this.CheckAcumulador[this.NumberAux] = sa_id;
          console.log("Se agrego en el numero: " + sa_id + ", en la posicion: " + this.NumberAux);
          this.NumberAux++;
        }
      }
    }

// this function delete the backend users of the table that are select whith the chek
  Delete(){
    for(this.i=0; this.i<this.NumberAux; this.i++){
      if(this.CheckAcumulador[this.i] == undefined){
        console.log("Indefinido");
      }else{
        this.SubAtributoService.CrudFunction(2, this.CheckAcumulador[this.i],"0",0)
        .subscribe((data) => {
          this.var = data;
          console.log(data);
        });
        // location.reload();
      }

  }
    this.Listar();
  }

//this function add users in to the data base
  Store(){
    this.sa_name = document.getElementById("sa_name");
    // this.s_attribute = document.getElementById("s_attribute");
    
    if(this.sa_name.value == ""){
      this.AlertName = true;
    }else{
      this.AlertName = false;
    }
    // if(this.s_attribute.value == "" ){
    //   this.AlertAttribute = true;
    // }else{
    //   this.AlertAttribute = false;
    // }
    if(this.sa_name.value != "" ){

      this.SubAtributoService.CrudFunction(
        3,
        0,
        this.sa_name.value,
        0)
      .subscribe((result)=>{this.var=result;});
      // this.ListBackendUsers();
      location.reload();

      this.ChangeTemplateEditar=true;
    }else{
      console.log("Falla al agregar");
    }
    }




}
