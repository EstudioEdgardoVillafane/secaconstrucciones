import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { catchError, map, tap } from 'rxjs/operators';
import { SubatributoService } from '../subatributo.service';
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
  su_nombre;
  su_attribute;

//these variable used to listed
  Listed;
  
//the function of these boleans are for validation alerts
  AlertName = false;
  AlertAttribute = false;
//the functioon filter
  searchAtributte
  listAttribute
  auxVar
//atributteClicked
  nameAtribute
  nameAtributeToAdd
  atributoList
  Aux;
  attributeValue;

  BooleanToCloseSeccion = true;
  listadoAtributo;
  var;
  CheckAcumulador = new Array();
  NumberAux=0;
  PositionAux = 0;
  i=0;
  Booleano = true;
  edit;
  edit_subAttribute
  listed;
  
  constructor( private subAtributoService : SubatributoService , private atributoService : AtributoService ) { }

  ngOnInit() {
    // if(localStorage.getItem("keyTwo") != "1"){
    //  // location.href="../../admin";
    // }
    this.listedSubAttributeTable();
    this.listedStoreAttributes();
  }

 
//this function lists the fields that are in the database
  listedSubAttributeTable(){
    this.subAtributoService.CrudFunction(1,0,"0",0)
    .map((response) => response.json())
    .subscribe((data) => {
      console.log(data);
      this.listed = data;
    }); 
  }

/** this function pulls the selected attribute */ 
  returnAttribute(){
    this.BooleanToCloseSeccion=true;
    this.nameAtributeToAdd.value="";
    this.nameAtributeToAdd.disabled = false;
  }
  
  
  //this funtion returns of the backend users table
  ReturnToTheTableUsers(){
    this.ChangeTemplateEditar=true;
    this.ChangeTemplateAgregar=true;
  }
  /********************************Store Functions *********************/
  
  //this function show the Store form
  ShowStoreForm(){
    this.ChangeTemplateEditar= false;
  }
  
  //this function listed the Attributes in the store form
    listedStoreAttributes(){
      this.atributoService.CrudFunction(1,"0",0,1)
      .map((response) => response.json())
      .subscribe((data) => {
        this.listAttribute = data;
      });
    }

//this function filter the Attributes in the store form
  filterStoreAtributte(){
    this.searchAtributte = document.getElementById("searchAttribute");
    for(this.i=0; this.i < this.listAttribute.length ; this.i++){
      if(this.listAttribute[this.i].a_nombre.match(this.searchAtributte.value)){
        this.auxVar = document.getElementById("cont"+this.listAttribute[this.i].a_id);
        this.auxVar.style.display = "block";
      }else{
        this.auxVar = document.getElementById ("cont"+this.listAttribute[this.i].a_id);
        this.auxVar.style.display = "none";
      }
    }
  }


//this function will select the attribute you click and put it in an input
  atributoStoreClicked(idAtributte : string){
    this.attributeValue = idAtributte;
    document.getElementById(idAtributte).style.backgroundColor = '';
    this.nameAtribute = document.getElementById(idAtributte);
    this.nameAtributeToAdd = document.getElementById("searchAttribute");
    document.getElementById("searchAttribute");
    this.nameAtributeToAdd.disabled = true;
    this.nameAtributeToAdd.value = this.nameAtribute.value; 
    this.atributoService.getJsonForName(this.nameAtribute.value,this.listAttribute)
    .subscribe(result => this.Aux = result );
    this.atributoList(this.Aux.a_id);
  }

//this function add users in to the data base    
  Store(){
    this.su_nombre = document.getElementById("su_nombre");
    this.su_attribute = document.getElementById("searchAttribute");
    this.atributoService.getJsonForName(this.su_attribute.value,this.listAttribute)
    .subscribe(result => this.getIdAttribute = result);
    
    if(this.su_nombre.value == ""){
      this.AlertName = true;
    }else{
      this.AlertName = false;
    }
    if(this.su_attribute.value == "" ){
      this.AlertAttribute = true;
    }else{
      this.AlertAttribute = false;
    }
    if(this.su_nombre.value != "" && this.su_attribute.value != "" ){
  
      this.subAtributoService.CrudFunction(
        3,
        0,
        this.su_nombre.value,
        this.getIdAttribute.a_id)
      .subscribe((result)=>{this.var=result;});
      location.reload();
      this.ChangeTemplateEditar=true;
    }else{
      console.log("Falla al agregar");
    }
  }
/******************** Edit functions **************************/
//this function take the values of the iputs and send the values of the data base
getIdAttribute;
  Edit(su_id : number){
    this.su_nombre = document.getElementById("edit_name");
    this.su_attribute = document.getElementById("searchEditAttribute");    
    this.atributoService.getJsonForName(this.su_attribute.value,this.listAttribute)
    .subscribe(result => this.getIdAttribute = result );

    if(this.su_nombre.value == ""){
      this.AlertName = true;
    }else{
      this.AlertName = false;
    }
    if(this.su_attribute.value == ""){
      this.AlertAttribute = true;
    }else{
      this.AlertAttribute = false;
    }
    if(this.su_nombre.value != "" && this.su_attribute.value != ""){
      this.subAtributoService.CrudFunction(
        4,
        su_id,
        this.su_nombre.value,
        this.getIdAttribute.a_id)
      .subscribe((data)=>{ this.var=data;console.log(data);});
      location.reload();
    } 
  }
  notEditAttributeAndShowInput = true; 
  editAttributeAndShowInput = false;
  editAttribute(){
    this.notEditAttributeAndShowInput = false;
    this.editAttributeAndShowInput = true;
  }
  CancelEditAttribute(){
    this.notEditAttributeAndShowInput = true; 
    this.editAttributeAndShowInput = false;
  }

  attributeClickedIDEdit
  attributeClickedEdit(idAtributte : string){
    this.attributeValue = idAtributte;
    this.nameAtribute = document.getElementById("atributoEdit"+idAtributte);
    this.nameAtributeToAdd = document.getElementById("searchEditAttribute"); 
    this.nameAtributeToAdd.disabled = true;
    this.nameAtributeToAdd.value = this.nameAtribute.value; 
    this.atributoService.getJsonForName(this.nameAtribute.value,this.listAttribute)
    .subscribe(result => this.attributeClickedIDEdit = result  );
    this.listedEditAttributes(this.attributeClickedIDEdit.a_id);
}
listedEditAttributes(id){
  this.atributoService.CrudFunction(1,"",0,id)
  .map((response)=> response.json())
  .subscribe((data) => {
    this.listAttribute = data;
  });
}
  filterEditAttribute(value){
    this.searchAtributte = document.getElementById("searchEditAttribute");  
    for(this.i=0; this.i < this.listAttribute.length ; this.i++){
      if(this.listAttribute[this.i].a_nombre.match(this.searchAtributte.value)){ 
        this.auxVar = document.getElementById("cont"+this.listAttribute[this.i].a_id);
        this.auxVar.style.display = "block";
      }else{
        this.auxVar = document.getElementById("cont"+this.listAttribute[this.i].a_id);
        this.auxVar.style.display = "none";
      }
    }
  }
  
//this funtion show the edit form and send the values of the data base in to the inputs of the forms
  ShowEditForm(su_id : number){
    this.ChangeTemplateAgregar=false;
    this.ChangeTemplateEditar=false;
    this.subAtributoService.getJsonIDSubAtributo(su_id,this.listed)
    .subscribe(resultado => this.edit_subAttribute = resultado);
  }

/****************************** Delete Functions *********/
// this function accumulates the checks that are in the table to be deleted later
  Check(su_id : number){
    this.Booleano=true;
    console.log("Contador: " + this.NumberAux);
    if(this.NumberAux == 0){
      this.CheckAcumulador[0] = su_id;
      this.NumberAux++;
      console.log("Primer numero en la lista: " + su_id)
    }else{
      for(this.i = 0; this.i<this.NumberAux ; this.i++){
        if(su_id == this.CheckAcumulador[this.i]){
          this.CheckAcumulador.splice(this.i, 1);
          this.Booleano = false;
          console.log("El numero: " + su_id + " está en la posicion: " + this.i);
          this.NumberAux++;
        }
      }
      if(this.Booleano){
        this.CheckAcumulador[this.NumberAux] = su_id;
        console.log("Se agrego en el numero: " + su_id + ", en la posicion: " + this.NumberAux);
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
        this.subAtributoService.CrudFunction(2, this.CheckAcumulador[this.i],"0",0)
        .subscribe((data) => {
          this.var = data;
        });
        location.reload();
      }
    }
    this.listedSubAttributeTable();
  }

}
