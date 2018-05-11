import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {


  constructor(private _activatedRoute:ActivatedRoute , private __productosService:ProductosService, private _location:Location) { }
 
  ListOfProducts;

  ngOnInit() {  
    console.log(this.Listar());
  }
  Listar(){
    this.__productosService.listProduct()
    .map((response) => response.json())
    .subscribe((data) => { 
      const name = this._activatedRoute.snapshot.paramMap.get('nombre');
      this.__productosService.getJsonForNameTwo(name,data)
      .subscribe((resultado) => { this.ListOfProducts = resultado });
  });
  }
}
