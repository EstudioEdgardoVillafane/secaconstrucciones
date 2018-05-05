import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backend-products',
  templateUrl: './backend-products.component.html',
  styleUrls: ['./backend-products.component.css']
})
export class BackendProductsComponent implements OnInit {
 /** This is the declaration of the variables. */

 CheckAcumulador = new Array();
 NumberAux = 0;
 PositionAux = 0;
 i=0;

 ListOfContent;
 Aux;
 titulo;
 parrafo;
 subtitulo;
 ListEdit;
 List;
 formElement;
 request;
 idproducto;

 BooleanAdd = true;
 Booleano = true;
 BooleanTable = true;
 BooleanToAlertTitulo = false;
 BooleanToAlertSubTitulo = false;
 BooleanToAlertParrafo = false;
 BooleanToValidate = false;

 /** I am defining the services. */
 
 constructor() {
    }

 /** Calling the function ListContent to do the list of content. */

 ngOnInit() {
  //  if(localStorage.getItem("keyTwo") != "1"){
  //    location.href="../../admin";
  //  }
   this.ListContent();
   this.Listarproductos();
 }


 /** In this function, we get the values of the input fields to update the regist. */
 EditReg(id : number){
  
   this.formElement = document.getElementById("Formulariod");
   this.request = new XMLHttpRequest();
   this.request.open("POST", "php/script/edit-content.php");
   console.log(this.request.send(new FormData(this.formElement)));
   this.ListContent();
   this.boolPrueb = true;
   
 }
 ValidateEditForm(){
   this.titulo = document.getElementById('titulo-ed');
   this.subtitulo = document.getElementById('subtitulo-ed');
   this.parrafo = document.getElementById('parrafo-ed');

   if(this.titulo.value == ""){
     this.BooleanToAlertTitulo = true;
   }else{
     this.BooleanToAlertTitulo = false;
   } 
   if(this.subtitulo.value == ""){
     this.BooleanToAlertSubTitulo = true;
   }else{
     this.BooleanToAlertSubTitulo = false;
   } 
   if(this.parrafo.value == ""){
     this.BooleanToAlertParrafo = true;
   }else{
     this.BooleanToAlertParrafo = false;
   }
   if(this.titulo.value != "" && this.subtitulo.value != "" && this.parrafo.value !=""){
     this.BooleanToValidate =true;
   }
   return this.BooleanToValidate;
 }

 /** This function is to change the list to the add form */
 ShowAdd(){
   this.BooleanTable = false;    
 }

 /** This function is to change the list to the edit form */
 ShowEdit(id : number){
   this.BooleanAdd = false;
   this.BooleanTable=false;
  //  this.contentService.getJsonForID(id,this.ListOfContent)
  //  .subscribe(resultado => this.ListEdit = resultado);

 }
 /** Return to the content list */
 Return(){
   this.BooleanTable = true;
   this.BooleanAdd = true;
   this.BooleanToAlertTitulo = false;
   this.BooleanToAlertSubTitulo = false;
   this.BooleanToAlertParrafo = false;
   this.ListContent();
   this.boolPrueb=false;
 }
 /** This fucntion is calling the database to do a list. CrudFunction is a function of service. He gets 6 parameter. */
 ListContent(){
  //  this.backendUserService.validateUser().subscribe((data) => {
  //  console.log(data.text());
   // if(data.text() == ""){
   //   // location.href="../../admin";
     
   // }else{
    //  this.contentService.CrudFunction(1,0,'','','','','')
      //  .map((response) => response.json())
      //  .subscribe((data) => { 
      //  this.ListOfContent = data;
    //  });
   // }
  //  });
 }

 Listarproductos(){
  //  this.contentService.listProduct()
    // .map((response) => response.json())
    // .subscribe((data) => { 
      // this.List = data;
    // });
  }


 /** When we do a click on a checkbox, we add it in an array and after is delete. */
 onCheck(id : number){  
   console.log(this.List);
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
        //  this.contentService.CrudFunction(2, this.CheckAcumulador[this.i],"","","","","")
        //  .subscribe((data) => { 
          //  this.Aux = data;
        //  });
       }
     }
     location.reload();
   }
/** Here we are validating the store form and creating the alert message */
   ValidateForm(){
     this.titulo = document.getElementById('nombre');
     this.subtitulo = document.getElementById('precio');
     this.parrafo = document.getElementById('descripcion');

     if(this.titulo.value == ""){
       this.BooleanToAlertTitulo = true;
     }else{
       this.BooleanToAlertTitulo = false;
     } 
     if(this.subtitulo.value == ""){
       this.BooleanToAlertSubTitulo = true;
     }else{
       this.BooleanToAlertSubTitulo = false;
     } 
     if(this.parrafo.value == ""){
       this.BooleanToAlertParrafo = true;
     }else{
       this.BooleanToAlertParrafo = false;
     }
     if(this.titulo.value != "" && this.subtitulo.value != "" && this.parrafo.value !=""){
       this.BooleanToValidate =true;
     }
     console.log(this.parrafo.value);
     return this.BooleanToValidate;
   }

   /** This function is storing the new regist in a database */
   boolPrueb = false;
   
   Store(){

     if(this.ValidateForm()){
     this.formElement = document.getElementById("Formulario");
     this.request = new XMLHttpRequest();
     this.request.open("POST", "php/script/store-content.php");
     console.log(this.request.send(new FormData(this.formElement)));
     this.ListContent();
     this.boolPrueb = true;
     }
   }
}
