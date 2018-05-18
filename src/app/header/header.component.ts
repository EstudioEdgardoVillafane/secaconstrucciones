import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
/*** Services ****/
import {ProductosService} from '../productos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
//listedProducts()
  listProductsInTheSearchEngine;

//searchEngineProducts()
  searchProduct;
  i;
  result;
  searchProducts = false;
  constructor(private productService : ProductosService) { }

  ngOnInit() {
    this.listedProducts();
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
  SearchEngineProducts(){
    this.searchProduct = document.getElementById("searchProduct");
    for(this.i=0; this.i < this.listProductsInTheSearchEngine.length ; this.i++){
      if(this.listProductsInTheSearchEngine[this.i].p_nombre.match(this.searchProduct.value) && this.searchProduct.value.length > 3){
        this.result = document.getElementById("cont"+this.listProductsInTheSearchEngine[this.i].p_id);
        this.result.style.display = "block";
      }else{
        this.result = document.getElementById("cont"+this.listProductsInTheSearchEngine[this.i].p_id);
        this.result.style.display = "none";
      }
    }
  }

}
