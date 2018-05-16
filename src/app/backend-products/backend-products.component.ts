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
 sumador;
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
  seccionClickedID;

  atributoName;
  atributoNameToAdd;
  BooleanToCloseAtributo = true;

  auxvar;       //Variables to filterSection();
  auxvar2;      //Variables to filterSection();
  
  varAuxInput;  //Variable to change the value of someone input

  VarInput3;    //Variable nextOne();
  VarInput4;    //Variable nextOne();
  AuxVarInput4; //Variable nextOne();

  /** I am defining the services. */
 
 constructor(private seccionService: SeccionService, private productoService : ProductosService, private atributoService : AtributoService, private subatributeService : SubatributoService) {}

 /** Calling the function ListContent to do the list of content. */

 ngOnInit() {

   this.ListContent();
   this.seccionList();
   
 }

/**
 * When someone div with class "cont+id" is clicked, return a background color;
 * @param value get an id froma a click
 * 
 *  
 * */
filterSection(value){

  this.auxvar = document.getElementById("buscarSeccion");  

  for(this.i=0; this.i < this.listSeccion.length ; this.i++){
  
    if(this.listSeccion[this.i].s_nombre.match(this.auxvar.value)){
      this.auxvar2 = document.getElementById("cont"+this.listSeccion[this.i].s_id);
      this.auxvar2.style.display = "block";
    }else{
      this.auxvar2 = document.getElementById("cont"+this.listSeccion[this.i].s_id);
      this.auxvar2.style.display = "none";
    }
  }
}

 /** In this function, we get the values of the input fields to update the regist. */
 
 EditReg(){
   this.formElement = document.getElementById("formularioEdit");
   this.request = new XMLHttpRequest();
   this.request.open("POST", "php/script/edit-producto.php");
   console.log(this.request.send(new FormData(this.formElement)));
   this.ListContent();   
 }


 /** This function is to change the list to the add form */
 ShowAdd(){
   this.BooleanTable = false;
   this.BooleanToCloseSeccion = true;   
   this.BoolAddProductOne = true;
 }

 /** This function is to change the list to the edit form 
  *  *
  * @param id Get a id from click to filter the json
  * */
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
 /**  This function do a select from of the seccion json.
  * 
  * @param number Get an id from the tag in (onClick)
  */
seccionValue;
 seccionClicked(number : string){
  this.seccionValue = number;
  document.getElementById(number).style.backgroundColor = '#80ff80';
  this.BooleanToCloseSeccion = false;
  this.seccionName = document.getElementById(number);
  this.seccionNameToAdd = document.getElementById("buscarSeccion"); 
  document.getElementById("buscarSeccion");
  this.seccionNameToAdd.disabled = true
  this.seccionNameToAdd.value = this.seccionName.value; 
  this.seccionService.getJsonForName(this.seccionName.value,this.listSeccion)
  .subscribe(result => this.seccionClickedID = result  );
  this.atributoList(this.seccionClickedID.s_id);
 }

atributoID;
atributoValue;
atributoClicked(id : string){
  this.atributoValue = id;
  this.BooleanToCloseAtributo = false;
  this.atributoName = document.getElementById("atributo"+id);
  this.atributoNameToAdd = document.getElementById("buscarAtributo"); 
  this.atributoNameToAdd.disabled = true
  this.atributoNameToAdd.value = this.atributoName.value; 
  this.atributoService.getJsonForName(this.atributoName.value,this.listAtributo)
  .subscribe(result => this.atributoID = result  );
  this.subAtributoList(this.atributoID.a_id);
}
subatributoValue;
subatributoClick;
subatributoCliked;
subatributoClicked(id:string){
  if(this.subatributoCliked == undefined){
    console.log("toto");
  }else{
    this.subatributoCliked.className = "list-group-item";
  }
    this.subatributoClick = document.getElementById("contador"+id);
    this.subatributoClick.className = "list-group-item active";
    this.subatributoValue = id;
    console.log(this.subatributoValue);
    console.log(this.atributoValue);
    console.log(this.seccionValue);
    this.subatributoCliked = this.subatributoClick;
    
}

filterAtributo(value){

  this.auxvar = document.getElementById("buscarAtributo");  

  for(this.i=0; this.i < this.listAtributo.length ; this.i++){
  
    if(this.listSeccion[this.i].s_nombre.match(this.auxvar.value)){
      this.auxvar2 = document.getElementById("conta"+this.listSeccion[this.i].a_id);
      this.auxvar2.style.display = "block";
    }else{
      this.auxvar2 = document.getElementById("conta"+this.listSeccion[this.i].a_id);
      this.auxvar2.style.display = "none";
    }
  }
}


 returnSeccion(){
   this.BooleanToCloseSeccion=true;
   this.seccionNameToAdd.value="";
   this.seccionNameToAdd.disabled = false;
 }

 returnAtributo(){
  this.BooleanToCloseAtributo=true;
  this.atributoNameToAdd.value="";
  this.atributoNameToAdd.disabled = false;
}
 

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
      this.listAtributo = data;
    });
  }

  listSubAtributo;
  subAtributoList(id){
    this.subatributeService.CrudFunction(1,id,"",0)
    .map((response) => response.json())
    .subscribe((data) => {
      this.listSubAtributo = data;
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


  /****************************************************** EDIT COMPONENT ********************************************/

  BooleanToCloseSeccionEdit = true;
  seccionClickedIDEdit;
  BoolToAtributeEdit = false;

  seccionClickedEdit(number : string){
      this.seccionValue = number;
      this.BooleanToCloseSeccionEdit = false;
      this.seccionName = document.getElementById("editSection"+number);
      this.seccionNameToAdd = document.getElementById("buscarSeccionEdit"); 
      this.seccionNameToAdd.disabled = true;
      this.seccionNameToAdd.value = this.seccionName.value; 
      this.seccionService.getJsonForName(this.seccionName.value,this.listSeccion)
      .subscribe(result => this.seccionClickedIDEdit = result  );
      this.atributoListEdit(this.seccionClickedIDEdit.s_id);
      this.BoolToAtributeEdit = true;
  }

  filterSectionEdit(value){

    this.auxvar = document.getElementById("buscarSeccionEdit");  
  
    for(this.i=0; this.i < this.listSeccion.length ; this.i++){
    
      if(this.listSeccion[this.i].s_nombre.match(this.auxvar.value)){
        this.auxvar2 = document.getElementById("cont"+this.listSeccion[this.i].s_id);
        this.auxvar2.style.display = "block";
      }else{
        this.auxvar2 = document.getElementById("cont"+this.listSeccion[this.i].s_id);
        this.auxvar2.style.display = "none";
      }
    }
  }
  returnSeccionEdit(){
      this.BooleanToCloseSeccionEdit=true;
      this.seccionNameToAdd.value="";
      this.seccionNameToAdd.disabled = false;
  }

/********************************************** ATRIBUTOS ********************************************************/

BooleanToCloseAtributoEdit = true;
atributoIDEdit;
BoolToSubAtributeEdit = false;

atributoClickedEdit(id : string){
    this.atributoValue = id;
    this.BooleanToCloseAtributoEdit = false;
    this.atributoName = document.getElementById("atributoEdit"+id);
    this.atributoNameToAdd = document.getElementById("buscarAtributoEdit"); 
    this.atributoNameToAdd.disabled = true
    this.atributoNameToAdd.value = this.atributoName.value; 
    this.atributoService.getJsonForName(this.atributoName.value,this.listAtributo)
    .subscribe(result => this.atributoIDEdit = result  );
    this.subAtributoListEdit(this.atributoIDEdit.a_id);
    this.BoolToSubAtributeEdit = true;
}

filterAtributoEdit(value){

  this.auxvar = document.getElementById("buscarAtributoEdit");  

  for(this.i=0; this.i < this.listAtributo.length ; this.i++){
  
    if(this.listSeccion[this.i].s_nombre.match(this.auxvar.value)){
      this.auxvar2 = document.getElementById("contaEdit"+this.listSeccion[this.i].a_id);
      this.auxvar2.style.display = "block";
    }else{
      this.auxvar2 = document.getElementById("contaEdit"+this.listSeccion[this.i].a_id);
      this.auxvar2.style.display = "none";
    }
  }
}
returnAtributoEdit(){
  this.BooleanToCloseAtributoEdit=true;
  this.atributoNameToAdd.value = "";
  this.atributoNameToAdd.disabled = false;
}

atributoListEdit(id){
  this.atributoService.CrudFunction(1,"",id,0)
    .map((response) => response.json())
    .subscribe((data) => {
      this.listAtributo = data;
    });
  }

/********************************************************** SUBATRIBUTO **********************************************************/
BoolEditAtributes = false;
otroBoton = false;

ShowAtribute(){
  this.BoolEditAtributes = true;
  this.otroBoton = true;
}

subAtributoListEdit(id){
  this.subatributeService.CrudFunction(1,id,"",0)
  .map((response) => response.json())
  .subscribe((data) => {
    this.listSubAtributo = data;
  });
}

subatributoClickedEdit(id:string){
    if(this.subatributoCliked == undefined){
      console.log("");
    }else{
      this.subatributoCliked.className = "list-group-item";
    }
      this.subatributoClick = document.getElementById("contadorEdit"+id);
      this.subatributoClick.className = "list-group-item active";
      this.subatributoValue = id;
      console.log(this.subatributoValue);
      console.log(this.atributoValue);
      console.log(this.seccionValue);
      this.subatributoCliked = this.subatributoClick; 
}

}
