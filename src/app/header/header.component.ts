import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
/*** Services ****/
import {ProductosService} from '../productos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  listProductsInTheSearchEngine;
  boolToShowClient = false;
  searchProduct;
  nameOfUser;
  i;
  result;
  searchProducts = false;
  constructor(private productService : ProductosService, private router: Router) { }

  ngOnInit() {
    this.listedProducts();
    if(localStorage.getItem("usuario") != ""){
      this.boolToShowClient = true;
      this.nameOfUser = localStorage.getItem("usuario");
    }
  }
/**this function listed the products in the data base */
  listedProducts(){
    this.productService.listProductFront(1,1)
    .map((response) => response.json())
    .subscribe((data) => {
      console.log(data);  
      this.listProductsInTheSearchEngine = data;
    });
  }
auxVar
BoolList = false;
contador
jsonSearch = new Array();
searchProductAux;
show:Boolean;


goToSearch(){
  this.auxVar = document.getElementById("searchProduct");
  this.router.navigateByUrl('/productos-busqueda/'+this.auxVar.value);
  
}

  SearchEngineProducts(){
    this.searchProduct = document.getElementById("searchProduct");
    if(this.searchProduct.value.length >= 3){
      this.jsonSearch.length = 0;
      this.contador = 0;
      this.searchProductAux  = document.getElementById("searchProduct");
      for(this.i=0; this.i < this.listProductsInTheSearchEngine.length ; this.i++){
        if(this.listProductsInTheSearchEngine[this.i].p_nombre.toUpperCase().match(this.searchProductAux.value.toUpperCase())){
          this.jsonSearch[this.contador] = this.listProductsInTheSearchEngine[this.i];
          this.contador++;
        }
      }
    }
    if(this.searchProduct.value.length >= 3 && this.jsonSearch.length != 0){
    this.BoolList = true;  
    }else{
      this.BoolList = false;
    }
  
    console.log(this.jsonSearch.values)
  }
  closeList(){
    this.BoolList = false;
  }

  product
  nameProduct
  nameProductToAdd
  Aux
  qwe
  atributoList
  productClicked(idAtributte : string){
    this.nameProduct = idAtributte;
    this.nameProductToAdd = document.getElementById("searchProduct");
    this.productService.getJsonForId(this.nameProduct,this.listProductsInTheSearchEngine)
    .subscribe(result => this.Aux = result);
    this.nameProductToAdd.value = this.Aux.p_nombre;
    this.BoolList = false;  
  }
  mostrarMegaMenu():void{
    this.show=!this.show;
  }
}
