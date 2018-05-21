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
import { Component, OnInit } from '@angular/core';
import { SeccionService} from '../seccion.service';
import { AtributoService } from '../atributo.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { BackendUserService } from '../backend-user.service';

@Component({
  selector: 'app-backend-atributo',
  templateUrl: './backend-atributo.component.html',
  styleUrls: ['./backend-atributo.component.css']
})
export class BackendAtributoComponent implements OnInit {

  //these variables are used to change the back-end user table to the form of editing or the form of store
  ChangeTemplateEditar=true;
  ChangeTemplateAgregar=true;

  //these variables are used to take the value of the id of the inputs in the HTML
  //store
  a_nombre;
  a_seccion;
  seccionValue;
  BooleanToCloseSeccionEdit=true;
  seccionName;
  seccionNameToAdd;
  seccionClickedIDEdit;
  atributoListEdit;
  BoolToAtributeEdit;
  buscarSeccion
  valorseccion;
  //edit
 
  a_id;

  Listed;
//the function of these boleans are for validation alerts
AlertNombre = false;
AlertSection = false;
 
  




  var;
  CheckAcumulador = new Array();
  NumberAux=0;
  PositionAux = 0;
  i=0;
  Booleano = true;
  edit;
  edit_atributo;
  listado;
  listadoseccion;
  listadoseccioneditar;
  constructor( private AtributoService:AtributoService,private seccionService:SeccionService) { }

  ngOnInit() {
    if(localStorage.getItem("keyTwo") != "1"){
     // location.href="../../admin";
    }
    this.Listar();
    this.Listarseccion();
  }

 
//this function show the Store form
  ShowStoreForm(){
    this.ChangeTemplateEditar= false;
  }

//this funtion show the edit form and send the values of the data base in to the inputs of the forms
 varn;
 seccioninput;
 seccioninputToAdd;
ShowEditForm(a_id : number){

    this.ChangeTemplateAgregar=false;
    this.ChangeTemplateEditar=false;
    this.AtributoService.getJsonID(a_id,this.listado)
    .subscribe(resultado => this.edit_atributo = resultado);

    
   
  }

//this funtion returns of the backend users table
  ReturnToTheTableUsers(){
    this.ChangeTemplateEditar=true;
    this.ChangeTemplateAgregar=true;
   
  }


  // Listar(){
  //   this.BackendUserService.validateUser().subscribe((data) => {
  //     console.log(data.text());
  //       this.BackendUserService.Conect(5,0,"0","0","0")
  //         .map((response) => response.json())
  //         .subscribe((data) => {
  //         this.listado = data;
  //       });
  //    });
  // }
    Listar(){
        this.AtributoService.CrudFunction(5,"0",0,0)
        .map((response) => response.json())
        .subscribe((data) => {
          this.listado = data;
          console.log(data)
        });
      }
      Listarseccion(){
        this.seccionService.CrudFunction(1,0,"0",0)
        .map((response) => response.json())
        .subscribe((data) => {
          this.listadoseccion = data;
        });
      }
//this function take the values of the iputs and send the values of the data base
varaux;
  Edit(a_id : number){
    this.a_nombre = document.getElementById("edit_nombre");
    this.a_seccion = document.getElementById("editarSeccion");

    this.a_id = document.getElementById("a_id");

    this.seccionService.getJsonForName(this.a_seccion.value,this.listadoseccion)
    .subscribe(data => this.varaux=data);
  
    
     

      
      
        this.AtributoService.CrudFunction(4,this.a_nombre.value,this.varaux.s_id,a_id)
        .subscribe((data)=>{ 
          this.var=data;
          console.log(data);
        });
            // this.ListBackendUsers();
         // location.reload();
        
     

      
     
  }
// this function accumulates the checks that are in the table to be deleted later
  Check(a_id : number){
     this.Booleano=true;
    console.log("Contador: " + this.NumberAux);
    if(this.NumberAux == 0){
      this.CheckAcumulador[0] = a_id;
      this.NumberAux++;
      console.log("Primer numero en la lista: " + a_id)
    }else{
      for(this.i = 0; this.i<this.NumberAux ; this.i++){
        if(a_id == this.CheckAcumulador[this.i]){
          this.CheckAcumulador.splice(this.i, 1);
          this.Booleano = false;
          console.log("El numero: " + a_id + " está en la posicion: " + this.i);
          this.NumberAux++;
        }
      }
      if(this.Booleano){
          this.CheckAcumulador[this.NumberAux] = a_id;
          console.log("Se agrego en el numero: " + a_id + ", en la posicion: " + this.NumberAux);
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
        this.AtributoService.CrudFunction(2,"0",0,this.CheckAcumulador[this.i])
        .subscribe((data) => {
          this.var = data;
          console.log(data);
        });
        this.Listar();
      }

  }
    
  }

//this function add users in to the data base
  Store(){
    this.a_nombre = document.getElementById("a_nombre");
    this.a_seccion = document.getElementById("buscarSeccion");
   
   

    if(this.a_nombre.value == ""){
      this.AlertNombre= true;
    }else{
      this.AlertNombre = false;
    }
    if(this.a_seccion.value == "" ){
      this.AlertSection = true;
    }else{
      this.AlertSection = false;
    }
    
    if(this.a_nombre.value != "" && this.a_seccion.value != ""){
this.seccionService.getJsonForName(this.a_seccion.value,this.listadoseccion)
.subscribe(result=>this.valorseccion=result);
      this.AtributoService.CrudFunction(
        3,
       
        this.a_nombre.value,
        this.valorseccion.s_id,
        0
      )
      .subscribe((result)=>{this.var=result;});
      // this.ListBackendUsers();
     //location.reload(); 
      console.log(this.var);
      this.ChangeTemplateEditar=true;
    }else{
      console.log("Falla al agregar");
    }
    
    this.Listar();
    location.reload();
    }

    seccionClicked(number : string){
      this.seccionValue = number;
      this.BooleanToCloseSeccionEdit = false;
      this.seccionName = document.getElementById(number);
      this.seccionNameToAdd = document.getElementById("buscarSeccion"); 
      this.seccionNameToAdd.disabled = true;
      this.seccionNameToAdd.value = this.seccionName.value; 
      this.seccionService.getJsonForName(this.seccionName.value,this.listadoseccion)
      .subscribe(result => this.seccionClickedIDEdit = result);
      this.atributoListEdit = this.seccionClickedIDEdit.s_id;
      
      this.BoolToAtributeEdit = true;
  }
  EditarClicked(number : string){
    this.seccionValue = number;
    this.BooleanToCloseSeccionEdit = false;
    this.seccionName = document.getElementById(number);
    this.seccionNameToAdd = document.getElementById("editarSeccion"); 
    this.seccionNameToAdd.disabled = true;
    this.seccionNameToAdd.value = this.seccionName.value; 
    this.seccionService.getJsonForName(this.seccionName.value,this.listadoseccion)
    .subscribe(result => this.seccionClickedIDEdit = result);
    this.atributoListEdit = this.seccionClickedIDEdit.s_id;
    
    this.BoolToAtributeEdit = true;
}
  auxvar;
  
  auxvar2;

  filterSection(value){

    this.auxvar = document.getElementById("buscarSeccion");  
  
    for(this.i=0; this.i < this.listadoseccion.length ; this.i++){
    
      if(this.listadoseccion[this.i].s_nombre.match(this.auxvar.value)){
        this.auxvar2 = document.getElementById("cont"+this.listadoseccion[this.i].s_id);
        this.auxvar2.style.display = "block";
      }else{
        this.auxvar2 = document.getElementById("cont"+this.listadoseccion[this.i].s_id);
        this.auxvar2.style.display = "none";
      }
    }
  }

  
  auxvareditaratr;
  auxvareditaratr2;

  filtersectioneditar(value){

    this.auxvareditaratr = document.getElementById("editarSeccion");  
  
    for(this.i=0; this.i < this.listadoseccion.length ; this.i++){
    
      if(this.listadoseccion[this.i].s_nombre.match(this.auxvareditaratr.value)){
        this.auxvareditaratr2 = document.getElementById("cont"+this.listadoseccion[this.i].s_id);
        this.auxvareditaratr2.style.display = "block";
      }else{
        this.auxvareditaratr2 = document.getElementById("cont"+this.listadoseccion[this.i].s_id);
        this.auxvareditaratr2.style.display = "none";
      }
    }
  }


}
