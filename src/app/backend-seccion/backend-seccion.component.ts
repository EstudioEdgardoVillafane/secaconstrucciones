/**
*
*******************************************
*** Project Name: Seca Construcciones   ***
*** @Description: Ecomerce              ***
*** @Author: Matias Balboa              ***
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
  import 'rxjs/add/operator/map';
  import { catchError, map, tap } from 'rxjs/operators';
  import { SeccionService } from '../seccion.service';

@Component({
  selector: 'app-backend-seccion',
  templateUrl: './backend-seccion.component.html',
  styleUrls: ['./backend-seccion.component.css']
})
export class BackendSeccionComponent implements OnInit {


  //these variables are used to change the back-end user table to the form of editing or the form of store
  ChangeTemplateEditar=true;
  ChangeTemplateAgregar=true;

  //these variables are used to take the value of the id of the inputs in the HTML
  //store
  storeObject = new Object;
  s_name;
  s_imagen;

  //these variable used to listed
  Listed;
  
//the function of these boleans are for validation alerts
  AlertName = false;
  alertimagen = false

  var;
  CheckAcumulador = new Array();
  NumberAux=0;
  PositionAux = 0;
  i=0;
  Booleano = true;
  edit_seccion
  listado;
  constructor( private SeccionService : SeccionService ) { }

  ngOnInit() {
    this.lists();
  }

/**this function show the Store form*/
  showStoreForm(){
    this.ChangeTemplateEditar= false;
  }

/**this funtion show the edit form and send the values of the data base in to the inputs of the forms*/
  showEditForm(s_id : number){
    this.ChangeTemplateAgregar=false;
    this.ChangeTemplateEditar=false;
    this.SeccionService.getJsonIDSeccion(s_id,this.listado)
    .subscribe(resultado => this.edit_seccion = resultado);
  }

/**this funtion returns of the backend users table*/
  returnToTheTableUsers(){
    this.ChangeTemplateEditar=true;
    this.ChangeTemplateAgregar=true;
  }

/**this function lists the sections of table in the backend */
  lists(){
    this.SeccionService.CrudFunction(1,0,"0",0)
    .map((response) => response.json())
    .subscribe((data) => {
      this.listado = data;
    });
  }

  
  /** this function accumulates the checks that are in the table to be deleted later*/
  check(s_id : number){
    this.Booleano=true;
    console.log("Contador: " + this.NumberAux);
    if(this.NumberAux == 0){
      this.CheckAcumulador[0] = s_id;
      this.NumberAux++;
      console.log("Primer numero en la lista: " + s_id)
    }else{
      for(this.i = 0; this.i<this.NumberAux ; this.i++){
        if(s_id == this.CheckAcumulador[this.i]){
          this.CheckAcumulador.splice(this.i, 1);
          this.Booleano = false;
          console.log("El numero: " + s_id + " está en la posicion: " + this.i);
          this.NumberAux++;
        }
      }
      if(this.Booleano){
          this.CheckAcumulador[this.NumberAux] = s_id;
          console.log("Se agrego en el numero: " + s_id + ", en la posicion: " + this.NumberAux);
          this.NumberAux++;
        }
      }
    }

/** this function delete the backend users of the table that are select whith the chek*/
delete(){
  for(this.i=0; this.i<this.NumberAux; this.i++){
      if(this.CheckAcumulador[this.i] == undefined){
        console.log("Indefinido");
      }else{
        this.SeccionService.CrudFunction(2, this.CheckAcumulador[this.i],"0",0)
        .subscribe((data) => {
          this.var = data;
          console.log(data);
        });
        location.reload();
      }
    }
    this.lists();
  }
  storeForm
  form
  request
  /**this function add users in to the data base*/
  store(){
    this.storeForm = document.getElementById("storeForm");
    this.s_name = document.getElementsByName("s_name");
    this.s_imagen = document.getElementsByName("s_imagen");
    
    
    this.form = new FormData(this.storeForm);
    
    
    if(this.s_name.value == ""){
      this.AlertName = true;
    }else{
      this.AlertName = false;
    }
    if(this.s_imagen.value == ""){
      this.alertimagen = true;
    }else{
      this.alertimagen = false;
    }
    
    if(this.s_name.value != "" && this.s_imagen.value != ""){
      
      this.request = new XMLHttpRequest();
      this.request.open("POST", "php/script/store-seccion.php", true);
      console.log(this.request.send(this.form));
      
      this.ChangeTemplateEditar=true;
    }else{
      console.log("Falla al agregar");
    }
  }
  formEdit
  formEditCliente
  requestEdit
  /**this function take the values of the iputs and send the values of the data base*/
    edit(s_id : number){
      this.formEditCliente = document.getElementById("formEditCliente");
      this.s_name = document.getElementById("edit_name");
    
      
      this.formEdit = new FormData(this.formEditCliente);

      if(this.s_name.value == ""){
        this.AlertName = true;
      }else{
        this.AlertName = false;
      }
      if(this.s_name.value != ""){

        this.requestEdit = new XMLHttpRequest();
        this.requestEdit.open("POST", "php/script/edit-seccion.php", true);
        console.log(this.requestEdit.send(this.formEdit));
        this.ChangeTemplateEditar=false;
      }
      this.lists();
  }
  
}
