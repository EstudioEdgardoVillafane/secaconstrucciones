import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProductosService } from '../productos.service';
import { EtiquetaService } from '../etiqueta.service';
import { SeccionService } from '../seccion.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  ListOfProducts;
  i;
  k;
  ListEtiqueta;
  ListProducts = new Array();
  ListDestacado = new Array();
  
  constructor(private seccionService : SeccionService, private productService : ProductosService, private etiquetaService : EtiquetaService, private productoService: ProductosService) { }

  ngOnInit() {
    this.doListEtiqueta();
    this.productService.listProductToFront()
    .map((response) => response.json())
    .subscribe((data) => { 
    this.ListOfProducts = data;
    this.doListDestacados(this.ListOfProducts);
    this.doList(this.ListOfProducts);
    });

    this.listedSeccionsFronted();
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

  
  doListEtiqueta(){
  this.etiquetaService.listEtiquetas()
  .map((response) => response.json())
  .subscribe((data) => {
    this.ListEtiqueta = data;
  });
  }
  
listSeccion

listedSeccionsFronted(){
  this.seccionService.CrudFunction(1,0,"0",0)
  .map((response)=> response.json())
  .subscribe((data)=>{
    console.log(data);
    this.listSeccion = data;
  });
}
  

  
}
