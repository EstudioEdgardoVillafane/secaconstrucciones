import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {


  ListOfProducts;
  i;
  k;
  ListProducts = new Array();
  ListDestacado = new Array();
  

  constructor(private productService : ProductosService) { }

  ngOnInit() {
    this.productService.listProductToFront()
    .map((response) => response.json())
    .subscribe((data) => { 
    this.ListOfProducts = data;
    this.doListDestacados(this.ListOfProducts);
    this.doList(this.ListOfProducts);
    });
  }

  /** This function do a filter of the json, to see the products with stars */
  doListDestacados(json){
    this.k = 0;
    for(this.i in json){
      if(json[this.i].p_prioridad == 1 && json[this.i].p_status == 1){
        this.ListDestacado[this.k] = json[this.i];
        this.k++;
      }
    }
  }
  /** This function do a filter of the json to see the products. */
  doList(json){
    this.k = 0;
    for(this.i in json){
      if(json[this.i].p_prioridad == 0 && json[this.i].p_status == 1){
        this.ListProducts[this.k] = json[this.i];
        this.k++;
      }
    }
  }

  
}
