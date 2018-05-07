import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProductosService, Productos } from '../productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos:any[]= [];

 

  constructor(private _productosService:ProductosService,private _router:Router) { 
    
} 

  ngOnInit() {
    this.productos=this._productosService.getProductos();
  }
  verProducto(idx:number){
    this._router.navigate(['/producto-detalle',idx]);
  }



  
}
