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
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
/**services */
import { SeccionService } from '../seccion.service';
import { AtributoService } from '../atributo.service';
import { ProductosService } from '../productos.service';
import { SubatributoService } from '../subatributo.service';
import { EtiquetaService } from '../etiqueta.service';
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
 BoolOfSearch = true;
 BoolAddProductOne= false;
 BooleanAdd = true;
 Booleano = true;
 BooleanTable = true;
 BooleanToAlertTitulo = false;
 BooleanToAlertSubTitulo = false;
 BooleanToAlertParrafo = false;
 BooleanToValidate = false;
  BooleanToCloseSeccion = true;
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
 
 constructor(private seccionService: SeccionService, private productoService : ProductosService, private atributoService : AtributoService, private etiquetaService: EtiquetaService ,private subatributeService : SubatributoService) {}

 /** Calling the function ListContent to do the list of content. */

 
ngOnInit() {
  this.ListContent();
  this.seccionList();
  this.etiquetaList();
}


JsonEtiquetas;

etiquetaList(){
this.etiquetaService.listEtiquetas()
.map((response) => response.json())
.subscribe((data) => {
  this.JsonEtiquetas = data;
});
}




 CantidadDePaginas : number;
 CantidadDePaginasSeccion;
 PaginaActualSeccion = 1;
 PaginaActual = 1;
ProbandoJson = new Array();
selectTr;
j;
Desde = 0;
Hasta = 8;
auxToProbandoJson = 0;
nextPag(){
  if(this.PaginaActual < this.CantidadDePaginas){
    this.PaginaActual++;
    this.Desde = this.Desde + 8;
    this.Hasta = this.Hasta + 8;
  }
}
prevPag(){
  if(this.PaginaActual > 1){
    this.PaginaActual--;
    this.Desde = this.Desde - 8;
    this.Hasta = this.Hasta - 8;
  }
}
nextPagSeccion(){
  if(this.PaginaActualSeccion < this.CantidadDePaginasSeccion){
    this.PaginaActualSeccion++;
    this.DesdeSeccion = this.DesdeSeccion + 8;
    this.HastaSeccion = this.HastaSeccion + 8;
  }
}
prevPagSeccion(){
  if(this.PaginaActualSeccion > 1){
    this.PaginaActualSeccion--;
    this.DesdeSeccion = this.DesdeSeccion - 8;
    this.HastaSeccion = this.HastaSeccion - 8;
  }
}




/**
 * When someone div with class "cont+id" is clicked, return a background color;
 * @param value get an id froma a click
 * 
 *  
 * */

 inputAux;

toUp(id : string){
  this.inputAux = document.getElementById("ordenP"+id);

  if( parseInt(this.inputAux.value) >= 0){
    this.inputAux.value = parseInt(this.inputAux.value) + 1;
    this.productoService.updateOrden(id,this.inputAux.value)
  .subscribe(data => console.log("toto"));
  }
  
}
toDown(id : string){
  this.inputAux = document.getElementById("ordenP"+id);

  if( parseInt(this.inputAux.value) > 0){
  this.inputAux.value = parseInt(this.inputAux.value) - 1;
  this.productoService.updateOrden(id,this.inputAux.value)
  .subscribe(data => console.log(data) );
  
  }
}

InputStoreSeccion;
seccionStore;
addSection(){
  this.seccionStore = document.getElementById("AgregarSeccion");
  this.InputStoreSeccion = document.getElementById("buscarSeccion");
  this.seccionService.CrudFunction(3,0,this.InputStoreSeccion.value,0)
  .subscribe((data) => {
    this.InputStoreSeccion.disabled = true;
    this.seccionStore.disabled = true;
    this.BooleanToCloseSeccion = false;
    this.seccionList();
  }); 
}

atributoStore;
InputStoreAtributo;

contador = 0;
ButtonStoreSeccion;
filterSection(value){
  this.auxvar = document.getElementById("buscarSeccion");  
  this.contador = 0;
  for(this.i=0; this.i < this.listSeccion.length ; this.i++){
    
    if(this.listSeccion[this.i].s_nombre.toUpperCase().match(this.auxvar.value.toUpperCase())){
      this.auxvar2 = document.getElementById("cont"+this.listSeccion[this.i].s_id);
      this.auxvar2.style.display = "block";
      this.contador = this.contador + 1;
    }else{
      this.auxvar2 = document.getElementById("cont"+this.listSeccion[this.i].s_id);
      this.auxvar2.style.display = "none";
    } 
  }
  this.ButtonStoreSeccion = document.getElementById("AgregarSeccion");
  if(this.contador > 0){
    this.ButtonStoreSeccion.disabled = true;
    this.ButtonStoreSeccion.value = "Buscar ";
    this.ButtonStoreSeccion.style.background = "rgb(67, 67, 67)";
  }else{
    this.ButtonStoreSeccion.disabled = false;
    this.ButtonStoreSeccion.value = "Agregar ";
    this.ButtonStoreSeccion.style.background = "#007bff";
  }
}

doFavorite(id, prioridad){
    this.productoService.doFav(id,prioridad)
    .subscribe(result => this.ListContent() );
}

auxSelectFilter;
k;
JsonFilterSeccion = new Array();
BoolOfSearchTrue = false;
BoolForSearchForSeccion =false;



DesdeSeccion = 0;
HastaSeccion = 8;
filterSeccionToProduct(){
 
  this.k = 0;
  this.JsonFilterSeccion.length = 0;
  this.auxSelectFilter = document.getElementById("filterToSection");
  if(this.auxSelectFilter.value != 0){

    this.sectionValueFilter = this.auxSelectFilter.value;

    for(this.i=0; this.i < this.ListOfContent.length ; this.i++){
      if(this.ListOfContent[this.i].p_section.match(this.sectionValueFilter)){
        this.JsonFilterSeccion[this.k] = this.ListOfContent[this.i];
        this.k++;    
      }
    }
    if(this.k > 0){
      this.BoolForSearchForSeccion = true;
      this.BoolOfSearch = false;
      this.BoolOfSearchTrue = false;
      this.CantidadDePaginasSeccion = this.JsonFilterSeccion.length/8;
      this.CantidadDePaginasSeccion = Math.ceil(this.CantidadDePaginasSeccion)
    }
  }else{
    this.BoolForSearchForSeccion = false;
    this.BoolOfSearch = true;
    this.BoolOfSearchTrue = false;
    this.searchNameProduct();
  }
}


jsonSearch = new Array();
anyContador = 0;
inputToSearchProduct;
BoolToList = false;

searchNameProduct(){
  this.BoolOfSearch = true;
  this.BoolOfSearchTrue = false;
  this.inputToSearchProduct = document.getElementById("searchProductName");
  if(this.inputToSearchProduct.value.length > 2){
  this.jsonSearch.length = 0;
 this.anyContador = 0;
  this.auxvar = document.getElementById("searchProductName");  
  for(this.i=0; this.i < this.ListOfContent.length ; this.i++){    
    if(this.ListOfContent[this.i].p_nombre.toUpperCase().match(this.auxvar.value.toUpperCase())){
      this.jsonSearch[this.anyContador] = this.ListOfContent[this.i];    
      this.anyContador++;
    }
  }
  }
  if(this.inputToSearchProduct.value.length > 3){
    this.BoolToList = true;
  }else{
    this.BoolToList =false;
  }
  if(this.jsonSearch.length == 0){
    this.BoolToList = false;;
  }
  console.log(this.jsonSearch);
}

inputOfSearchProduct;
JsonFind;
clickOnList(productName){

  this.inputOfSearchProduct = document.getElementById("searchProductName");
  this.inputOfSearchProduct.value = productName;
  
  this.productoService.getJsonForNameTwo(productName,this.ListOfContent)
  .subscribe((data) => {
    this.JsonFind = data;
    this.BoolOfSearchTrue = true;
    this.BoolToList = false;
    this.BoolOfSearch = false;
    console.log(this.JsonFind);
  });

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


inputFiltler;
listadoSelect;
seccionBool = false;
auxProd;

selectCategoria(){
  this.inputFiltler = document.getElementById("filterProduct");
  console.log(this.inputFiltler.value);
  if(this.inputFiltler.value == 1){
    this.seccionBool = true;
    this.seccionService.CrudFunction(1,0,"0",0)
    .map((response) => response.json())
    .subscribe((data) => {
      this.listadoSelect = data;
    });    
  }else if(this.inputFiltler.value == 0){
    this.auxProd = document.getElementsByClassName("hereVisi");
    for(this.i = 0; this.i < this.auxProd.length; this.i++) {
      /*Si la clase es encontrada modificar el tamaño de fuente*/
      if (this.auxProd[this.i].className == "hereVisi") {
        this.auxProd[this.i].style.display = "table-row";
      }
    }
    this.listadoSelect = null;
  }else{    
      this.listFilterAtributo();
      this.seccionBool = false;
  }

}
listadoSeleccionado;
subatributoClikeds
sectionValueFilter;

  atributoFilterToProduct(id : string){
    if(this.subatributoCliked == undefined){
      console.log("toto")
    }else{
      this.subatributoCliked.className = "list-group-item";
    }
      this.subatributoClick = document.getElementById("atributoFilter"+id);
      this.subatributoClick.className = "list-group-item active";
      this.subatributoCliked = this.subatributoClick;

  
      for(this.i=0; this.i < this.ListOfContent.length ; this.i++){
      
        if(this.ListOfContent[this.i].p_atributo.match(id)){
          this.auxvar2 = document.getElementById("listProductCont"+this.ListOfContent[this.i].p_id);
          this.auxvar2.style.display = "table-row";
          console.log("toto: " + "listProductCont"+this.ListOfContent[this.i].p_id);
        }else{
          this.auxvar2 = document.getElementById("listProductCont"+this.ListOfContent[this.i].p_id);
          this.auxvar2.style.display = "none";
        }
      }

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
  this.BooleanToCloseSeccion = false;
  this.seccionValue = number;
  document.getElementById(number).style.backgroundColor = '#80ff80';
  this.seccionName = document.getElementById(number);
  this.seccionNameToAdd = document.getElementById("buscarSeccion"); 
  document.getElementById("buscarSeccion");
  this.seccionNameToAdd.disabled = true
  this.seccionNameToAdd.value = this.seccionName.value; 
  this.atributoList(number);
 }

 BooleanToCloseEtiqueta = true;
 etiquetaValue;
 etiquetaName;
 etiquetaNameToAdd;
 ArrayOfEtiquetas = new Array();
 CountOfEtiquetas = 0;

 etiquetaClicked(number : string){
  this.ArrayOfEtiquetas = this.ArrayOfEtiquetas.filter(this.diferenceUndefined)

  this.etiquetaValue = number;
  this.etiquetaName = document.getElementById("Etiqueta"+number);
 if(this.ArrayOfEtiquetas.length == 0){
  this.ArrayOfEtiquetas[this.CountOfEtiquetas] = this.etiquetaName.value;
  this.CountOfEtiquetas++;
 }else{
   this.anyContador = 0;
  for(this.i=0;this.i<this.ArrayOfEtiquetas.length;this.i++){
    if(this.ArrayOfEtiquetas[this.i] == this.etiquetaName.value){
      this.anyContador++;
    }
  }
  if(this.anyContador==0){
    this.ArrayOfEtiquetas[this.CountOfEtiquetas] = this.etiquetaName.value;
    this.CountOfEtiquetas++;
  }
}
  this.ArrayOfEtiquetas = this.ArrayOfEtiquetas.filter(this.diferenceUndefined)
 }

 PositionOfElementToSearch;
 deleteEtiqueta(nameOfEtiqueta){
  this.PositionOfElementToSearch = this.ArrayOfEtiquetas.indexOf(nameOfEtiqueta);
  this.ArrayOfEtiquetas.splice(this.PositionOfElementToSearch,1);
  this.ArrayOfEtiquetas = this.ArrayOfEtiquetas.filter(this.diferenceUndefined)
 }
 diferenceUndefined(data){
   return data != undefined;
 }

 filterEtiqueta(){
  this.ButtonStoreSeccion = document.getElementById("storeEtiqueta");

  this.auxvar = document.getElementById("searchEtiqueta");  
  this.contador = 0;
  if(this.JsonEtiquetas != undefined){
  for(this.i=0; this.i < this.JsonEtiquetas.length ; this.i++){
    if(this.JsonEtiquetas[this.i].e_nombre.toUpperCase().match(this.auxvar.value.toUpperCase())){
      this.auxvar2 = document.getElementById("EtiquetaShow"+this.JsonEtiquetas[this.i].e_id);
      this.auxvar2.style.display = "block";
      this.contador = this.contador + 1;
    }else{
      this.auxvar2 = document.getElementById("EtiquetaShow"+this.JsonEtiquetas[this.i].e_id);
      this.auxvar2.style.display = "none";
    }
  }

  }
  if(this.contador > 0){
    this.ButtonStoreSeccion.disabled = true;
    this.ButtonStoreSeccion.value = "Buscar ";
    this.ButtonStoreSeccion.style.background = "rgb(67, 67, 67)";
  }else{
    this.ButtonStoreSeccion.disabled = false;
    this.ButtonStoreSeccion.value = "Agregar ";
    this.ButtonStoreSeccion.style.background = "#007bff";
  }
  console.log(this.contador);
}
BooleanToCloseEtiquetas = true;
storeEtiqueta(){
this.auxvar = document.getElementById("searchEtiqueta");
this.auxvar2 = document.getElementById("storeEtiqueta");
  this.etiquetaService.storeEtiqueta(this.auxvar.value)
  .subscribe((data) => {
    this.auxvar2.disabled = true;
    this.etiquetaService.listEtiquetas()
      .map((response) => response.json())
      .subscribe((data) => {
      this.JsonEtiquetas = data;
      this.etiquetaService.getJsonForName(this.auxvar.value,this.JsonEtiquetas)
      .subscribe(data => this.ArrayOfEtiquetas[this.CountOfEtiquetas] = data.e_nombre)
      console.log(this.ArrayOfEtiquetas[this.CountOfEtiquetas]);
      this.CountOfEtiquetas++;
    });
    
  });
}
returnEtiqueta(){
  this.BooleanToCloseEtiquetas = true;
  this.seccionNameToAdd = document.getElementById("searchEtiqueta");
  this.seccionNameToAdd.value="";
  this.seccionNameToAdd.disabled = false;
  this.auxvar = document.getElementById("storeEtiqueta");
  this.auxvar.value = "Buscar";
  this.auxvar.style.background = "rgb(67, 67, 67)";
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
  console.log(this.atributoID);
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
addAtributo(){
  this.atributoStore = document.getElementById("AgregarAtributoT");
  this.InputStoreAtributo = document.getElementById("buscarAtributo");
  this.atributoService.CrudFunction(3,this.InputStoreAtributo.value,this.seccionValue,0)
  .subscribe((data) => {
    this.atributoService.CrudFunction(1,"",this.seccionValue,0)
    .map((response) => response.json())
    .subscribe((data) => {
      this.listAtributo = data;
      this.atributoValue = this.listAtributo.a_id;
      this.BooleanToCloseAtributo = false;
      this.InputStoreAtributo.disabled = true;
      this.atributoStore.disabled = true;
      this.BooleanToCloseAtributo = false;
      console.log(this.atributoValue);
    });    
  }); 
}

varOptionToStore;

addOpcion(){
this.varOptionToStore = document.getElementById("storeOpcion");
this.subatributeService.CrudFunction(3,0,this.varOptionToStore.value,this.atributoValue)
.subscribe((data) => {
console.log(data);
this.subAtributoList(this.atributoValue);
});
}
ButtonStoreAtributo;

filterAtributo(){

  this.auxvar = document.getElementById("buscarAtributo");  
  this.contador = 0;
  if(this.listAtributo != undefined){
  for(this.i=0; this.i < this.listAtributo.length ; this.i++){
    if(this.listAtributo[this.i].a_nombre.toUpperCase().match(this.auxvar.value.toUpperCase())){
      this.auxvar2 = document.getElementById("conta"+this.listAtributo[this.i].a_id);
      this.auxvar2.style.display = "block";
      this.contador = this.contador + 1;
    }else{
      this.auxvar2 = document.getElementById("conta"+this.listAtributo[this.i].a_id);
      this.auxvar2.style.display = "none";
    }
  }
  }
  this.ButtonStoreAtributo = document.getElementById("AgregarAtributoT");

    if(this.contador > 0){
      this.ButtonStoreAtributo.disabled = true;
      this.ButtonStoreAtributo.value = "Buscar ";
      this.ButtonStoreAtributo.style.background = "rgb(67, 67, 67)";
    }else{
      this.ButtonStoreAtributo.disabled = false;
      this.ButtonStoreAtributo.value = "Agregar ";
      this.ButtonStoreAtributo.style.background = "#007bff";
    }  
}


 returnSeccion(){
   this.BooleanToCloseSeccion = true;
   this.seccionNameToAdd = document.getElementById("buscarSeccion");
   this.seccionNameToAdd.value="";
   this.seccionNameToAdd.disabled = false;

   this.seccionStore.value = "Buscar";
   this.seccionStore.style.background = "rgb(67, 67, 67)";
 }

 returnAtributo(){
  this.BooleanToCloseAtributo = true;
  this.atributoNameToAdd = document.getElementById("buscarAtributo");
  this.atributoNameToAdd.disabled = false;
  this.atributoNameToAdd.value = "";

  this.ButtonStoreAtributo = document.getElementById("AgregarSeccionT");
  this.ButtonStoreAtributo.value = "Buscar ";
  this.ButtonStoreAtributo.style.background = "rgb(67, 67, 67)";

}
 

nextOne(){
  this.nameProduct =  document.getElementById("nameproduct");
  document.getElementById("addproduct").innerHTML = this.nameProduct.value;
  this.globalSlug = document.getElementById("slugP")
  this.VarInput3 = document.getElementById("productName");
  this.VarInput3.value = this.nameProduct.value; 
  this.AuxVarInput4 = document.getElementById("buscarSeccion");
  this.BoolAddProductTwo = true;
  this.BoolAddProductOne =false;
  this.BooleanToCloseSeccion=false; 
  this.InputStoreSeccion = document.getElementById("buscarSeccion");
  this.seccionService.getJsonForName(this.InputStoreSeccion.value,this.listSeccion)
  .subscribe(result => this.seccionValue = result.s_id);
  this.atributoService.CrudFunction(1,"",this.seccionValue,0)
  .map((response) => response.json())
  .subscribe((data) => {
  this.listAtributo = data;
  this.filterAtributo();
  });
  
  
  
//   if(this.listAtributo == undefined){
//     this.VarInput4 = document.getElementById("AgregarAtributo");
// console.log(this.VarInput4.value);
//     this.VarInput4.style.background = "red";
//   }
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
         console.log(data)
       this.ListOfContent = data;
    
       this.CantidadDePaginas = this.ListOfContent.length/8;
       this.CantidadDePaginas = Math.ceil(this.CantidadDePaginas)
     });
   }
 

 /**
  * Get a json to do a list.
  */
 seccionList(){ 
    this.seccionService.CrudFunction(1,0,"0",0)//cambie esto (1,"",0,0) por que si no no compila, cualquier cosa cambienlo
    .map((response) => response.json())
    .subscribe((data) => {
      this.listSeccion = data;
    });
  }

  listFilterAtributo(){
    this.atributoService.CrudFunction(8,"",0,0)
    .map((response) => response.json())
    .subscribe((data) => {
      this.listadoSelect = data;
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
    this.subatributeService.CrudFunction(6,0,"",id)
    .map((response) => response.json())
    .subscribe((data) => {
      this.listSubAtributo = data;
      console.log(data);
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
        });
       }
     }
     this.ListContent();
   }

auxDuplicate;

   DuplicateReg(){
    for(this.i=0; this.i<this.NumberAux; this.i++){
      if(this.CheckAcumulador[this.i] == undefined){
        console.log("Indefinido");
      }else{
        this.productoService.getJsonForId(this.CheckAcumulador[this.i],this.ListOfContent)
        .subscribe( data => this.auxDuplicate = data);
        this.productoService.duplicateReg(
          this.auxDuplicate.p_id,
          this.auxDuplicate.p_nombre,
          this.auxDuplicate.p_section,
          this.auxDuplicate.p_atributo,
          this.auxDuplicate.p_subatributo,
          this.auxDuplicate.p_precio,
          this.auxDuplicate.p_url,
          this.auxDuplicate.p_descripcion
        )
        .subscribe( data => this.ListContent() );
      }
    }
  }
/** Here we are validating the store form and creating the alert message */

   /** This function is storing the new regist in a database */
   globalSlug;
   IdInsert;
   IdEtiqueta;
   formulario;
   ArrayOfEtiquetasForId = new Array();

   StoreProduct(){
   this.contador = 0;
   for(this.i=0;this.i<this.ArrayOfEtiquetas.length;this.i++){
    if(this.ArrayOfEtiquetas[this.i] != undefined){
      this.etiquetaService.getJsonForName(this.ArrayOfEtiquetas[this.i],this.JsonEtiquetas)
      .subscribe((data) => {
        this.ArrayOfEtiquetasForId[this.contador] = data.e_id;
        this.contador++;
      });
    }
    }
   
    this.formElement = document.getElementById("formularioStore");
    
    this.formulario = new FormData(this.formElement);
    this.formulario.append("slug", this.globalSlug.value);
    this.formulario.append("arrayEtiqueta", this.ArrayOfEtiquetasForId);
     this.request = new XMLHttpRequest();
     this.request.open("POST", "php/script/store-product.php", true);
      console.log(this.request.send(this.formulario));
      this.ListContent();    
   
    }




    // doStoreToEtiquetas(IdInsert){
    //   console.log("anda toto");
    //   for(this.i = 0; this.i<this.ArrayOfEtiquetas.length; this.i++){
    //     if(this.ArrayOfEtiquetas[this.i] != undefined){
    //       this.etiquetaService.getJsonForName(this.ArrayOfEtiquetas[this.i], this.JsonEtiquetas)
    //       .subscribe((data) => {
    //         this.etiquetaService.storeEtiquetaToProduct(IdInsert, data.e_id)
    //         .subscribe(data => console.log(data));
    //       });
    //     }
    //   }
    // }

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
  addSectionEdit(){
    this.seccionStore = document.getElementById("AgregarSeccionEdit");
    this.InputStoreSeccion = document.getElementById("buscarSeccionEdit");
    this.seccionService.CrudFunction(3,0,this.InputStoreSeccion.value,0)
    .subscribe((data) => {
      this.InputStoreSeccion.disabled = true;
      this.seccionStore.disabled = true;
      this.BooleanToCloseSeccionEdit = false;
      this.seccionList();
    }); 
  }
  filterSectionEdit(value){

    this.auxvar = document.getElementById("buscarSeccionEdit");  
  
    for(this.i=0; this.i < this.listSeccion.length ; this.i++){
    
      if(this.listSeccion[this.i].s_nombre.toUpperCase().match(this.auxvar.value.toUpperCase())){
        this.auxvar2 = document.getElementById("cont"+this.listSeccion[this.i].s_id);
        this.auxvar2.style.display = "block";
      }else{
        this.auxvar2 = document.getElementById("cont"+this.listSeccion[this.i].s_id);
        this.auxvar2.style.display = "none";
      }
    }
    this.ButtonStoreSeccion = document.getElementById("AgregarSeccionEdit");
    if(this.contador > 0){
      this.ButtonStoreSeccion.disabled = true;
      this.ButtonStoreSeccion.value = "Buscar ";
      this.ButtonStoreSeccion.style.background = "rgb(67, 67, 67)";
    }else{
      this.ButtonStoreSeccion.disabled = false;
      this.ButtonStoreSeccion.value = "Agregar ";
      this.ButtonStoreSeccion.style.background = "#007bff";
    }
  }
  returnSeccionEdit(){
      this.BooleanToCloseSeccionEdit=true;
      this.seccionNameToAdd = document.getElementById("buscarSeccionEdit");
      this.seccionNameToAdd.value="";
      this.seccionNameToAdd.disabled = false;

      this.seccionStore = document.getElementById("AgregarSeccionEdit")
      this.seccionStore.value = "Buscar";
      this.seccionStore.style.background = "rgb(67, 67, 67)";
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
  
    if(this.listSeccion[this.i].s_nombre.toUpperCase().match(this.auxvar.value.toUpperCase())){
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
  this.subatributeService.CrudFunction(6,id,"",0)
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
