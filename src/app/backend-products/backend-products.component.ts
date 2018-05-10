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
import { SeccionService } from '../seccion.service';
import { AtributoService } from '../atributo.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { ProductosService } from '../productos.service';
import { SubatributoService } from '../subatributo.service';
@Component({
  selector: 'app-backend-products',
  templateUrl: './backend-products.component.html',
  styleUrls: ['./backend-products.component.css']
})
export class BackendProductsComponent implements OnInit {
 /** This is the declaration of the variables. */

 CheckAcumulador = new Array();
 CheckAtribute = new Array();
 CheckSubAtribute = new Array();
 NumberAux = 0;
 PositionAux = 0;
 i=0;
 idNameProduct;
 seccionName;
 seccionNameToAdd;
 ListOfContent;
 listSeccion;
 listAtributo;
  Aux;
  nameProduct;
 titulo;
 parrafo;
 subtitulo;
 ListEdit;
 List;
 formElement;
 request;
 idproducto;
 BoolAddProductOne= false;
 BooleanAdd = true;
 Booleano = true;
 BooleanTable = true;
 BooleanToAlertTitulo = false;
 BooleanToAlertSubTitulo = false;
 BooleanToAlertParrafo = false;
 BooleanToValidate = false;
  BooleanToCloseSeccion = false;
  BoolAddProductTwo = false;
  arrayAtribute = 0;
  boleeanToCheckAtribute = false;
  numberAuxToAtribute;
  auxID;
  ListSubAtribute = new Array();
 /** I am defining the services. */
 
 constructor(private seccionService: SeccionService, private productoService : ProductosService, private atributoService : AtributoService, private subatributeService : SubatributoService) {}

 /** Calling the function ListContent to do the list of content. */

 ngOnInit() {
  //  if(localStorage.getItem("keyTwo") != "1"){
  //    location.href="../../admin";
  //  }
  
   this.ListContent();
   this.seccionList();
   
 }
auxvar;
auxvar2;
auxvar3;
filterSection(value){
  this.auxvar = document.getElementById("buscarSeccion");
  
  for(this.i=0; this.i < this.listSeccion.length ; this.i++){
    if(this.listSeccion[this.i].s_nombre.match(this.auxvar.value)){

      console.log("este va"+this.listSeccion[this.i].s_nombre);
      this.auxvar2 = document.getElementById("cont"+this.listSeccion[this.i].s_id);
      this.auxvar2.style.display = "block";
    }else{
      this.auxvar2 = document.getElementById("cont"+this.listSeccion[this.i].s_id);
      console.log(this.auxvar2.value);
      this.auxvar2.style.display = "none";
    }
  }
}
 /** In this function, we get the values of the input fields to update the regist. */
 EditReg(id : number){
   this.formElement = document.getElementById("Formulariod");
   this.request = new XMLHttpRequest();
   this.request.open("POST", "php/script/edit-content.php");
   console.log(this.request.send(new FormData(this.formElement)));
   this.ListContent();   
 }


 /** This function is to change the list to the add form */
 ShowAdd(){
   this.BooleanTable = false;
   this.BooleanToCloseSeccion = true;   
   this.BoolAddProductOne = true;
 }

 /** This function is to change the list to the edit form */
 ShowEdit(id : number){
   this.BooleanAdd = false;
   this.BooleanTable=false;
   this.seccionService.getJsonForID(id,this.ListOfContent)
   .subscribe(resultado => this.ListEdit = resultado);
 }
 /** Return to the content list */
 Return(){
   this.BooleanTable = true;
   this.BooleanAdd = true;
   this.BooleanToAlertTitulo = false;
   this.BooleanToAlertSubTitulo = false;
   this.BooleanToAlertParrafo = false;
   this.ListContent();
 }
auxiliar;
 seccionClicked(number : string){
  document.getElementById(number).style.backgroundColor = '#80ff80';
  this.BooleanToCloseSeccion = false;
  this.seccionName = document.getElementById(number);
  this.seccionNameToAdd = document.getElementById("buscarSeccion"); 
  document.getElementById("buscarSeccion");
  this.seccionNameToAdd.disabled = true
  this.seccionNameToAdd.value = this.seccionName.value; 
  this.seccionService.getJsonForName(this.seccionName.value,this.listSeccion)
  .subscribe(result => this.auxiliar = result  );
  console.log(this.auxiliar);
  console.log(this.auxiliar.s_id);
  this.atributoList(this.auxiliar.s_id);
 }
varAuxInput;
 
atributoClicked(id : string){
  this.boleeanToCheckAtribute=true;    
   if(this.arrayAtribute == 0){
     this.CheckAtribute[0] = id;
     this.arrayAtribute++;
   }else{
     for(this.i = 0; this.i<this.arrayAtribute ; this.i++){
       if(id == this.CheckAtribute[this.i]){
         this.CheckAtribute.splice(this.i, 1);
         this.boleeanToCheckAtribute = false;
         this.arrayAtribute++;
       }
     }
     if(this.boleeanToCheckAtribute){
         this.CheckAtribute[this.arrayAtribute] = id;
         this.arrayAtribute++;
       }
     }
     if(document.getElementById(id).style.backgroundColor == "rgb(128, 255, 128)"){
      document.getElementById(id).style.backgroundColor = 'white';
    }else{
      document.getElementById(id).style.backgroundColor = '#80ff80';    
    }
    this.varAuxInput  = document.getElementsByName("atribute");
    this.varAuxInput.value = this.CheckAtribute.toString();  
    
    for(this.i=0; this.i<this.arrayAtribute; this.i++){
      if(this.CheckAtribute[this.i] == undefined){
        console.log("Indefinido");
      }else{
        this.sumador = 0;
        this.subatributeService.CrudFunction(1,this.CheckAtribute[this.i],"",0)
        .map((response) => response.json())
        .subscribe((data) => { 
        this.ListSubAtribute[this.sumador] =  data;
        console.log(this.ListSubAtribute[this.sumador]);
        this.sumador++;
        });
      } 
    }
    console.log(this.ListSubAtribute);
 }
sumador;
 returnSeccion(){
   this.BooleanToCloseSeccion=true;
   this.seccionNameToAdd.value="";
   this.seccionNameToAdd.disabled = false;
 }

VarInput3;
VarInput4;
AuxVarInput4; 

nextOne(){
  this.nameProduct =  document.getElementById("nameproduct");
  document.getElementById("addproduct").innerHTML = this.nameProduct.value;
  this.VarInput3 = document.getElementById("productName");
  this.VarInput3.value = this.nameProduct.value; 
  this.VarInput4 = document.getElementById("SectionAdd");
  this.AuxVarInput4 = document.getElementById("buscarSeccion");
  this.BoolAddProductTwo = true;
  this.BoolAddProductOne =false;
  this.BooleanToCloseSeccion=false; 
 }

 ReturnToOne(){
  this.BoolAddProductOne = true;
  this.BoolAddProductTwo = false;
  this.BooleanToCloseSeccion = true;
  document.getElementById("addproduct").innerHTML = "Agregar nuevo producto";
 }

 /** This fucntion is calling the database to do a list. CrudFunction is a function of service. He gets 6 parameter. */
 ListContent(){
     this.productoService.listProduct()
       .map((response) => response.json())
       .subscribe((data) => { 
       this.ListOfContent = data;
     });
   }
 

 /**
  * Get a json to do a list.
  */
 seccionList(){ 
    this.seccionService.CrudFunction(1,1,"0",0)//cambie esto (1,"",0,0) por que si no no compila, cualquier cosa cambienlo
    .map((response) => response.json())
    .subscribe((data) => {
      this.listSeccion = data;
    });
  }

  atributoList(id){
    this.atributoService.CrudFunction(1,"",id,0)
    .map((response) => response.json())
    .subscribe((data) => {
      console.log(data);
      this.listAtributo = data;
    });
  }


 /** When we do a click on a checkbox, we add it in an array and after is delete. */
 onCheck(id : number){  
   console.log(this.CheckAcumulador);
   this.Booleano=true;    
   if(this.NumberAux == 0){
     this.CheckAcumulador[0] = id;
     this.NumberAux++;
   }else{
     for(this.i = 0; this.i<this.NumberAux ; this.i++){
       if(id == this.CheckAcumulador[this.i]){
         this.CheckAcumulador.splice(this.i, 1);
         this.Booleano = false;
         this.NumberAux++;
       }
     }
     if(this.Booleano){
         this.CheckAcumulador[this.NumberAux] = id;
         this.NumberAux++;
       }
     }
   }
   /** Here is where we delete the checkbox (ID of user) */
   DeleteReg(){
     for(this.i=0; this.i<this.NumberAux; this.i++){
       if(this.CheckAcumulador[this.i] == undefined){
         console.log("Indefinido");
       }else{
         this.productoService.CrudFunction(this.CheckAcumulador[this.i])
         .subscribe((data) => { 
          console.log(data);
        });
       }
     }
   }
/** Here we are validating the store form and creating the alert message */

   /** This function is storing the new regist in a database */
   
   
   StoreProduct(){
     this.formElement = document.getElementById("formularioStore");
     this.request = new XMLHttpRequest();
     this.request.open("POST", "php/script/store-product.php");
     console.log(this.request.send(new FormData(this.formElement)));
     this.ListContent();    
   }
}
