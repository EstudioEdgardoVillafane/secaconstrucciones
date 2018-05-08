import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProductosService, Productos } from '../productos.service';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {

  producto:any = {};

  constructor(private _activatedRoute:ActivatedRoute , private __productosService:ProductosService, private _location:Location) { 
    
      this._activatedRoute.paramMap.subscribe(params => {
   
      this.producto=this.__productosService.getProducto(params.get('id'));
  
    });
  
  }

  ngOnInit() {
  }
  back() {
    this._location.back();
  }
}
