import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeccionService } from '../seccion.service';
import { ProductosService } from '../productos.service';
import { Location } from '@angular/common';
import { AtributoService } from '../atributo.service';

@Component({
  selector: 'app-producto-categoria',
  templateUrl: './producto-categoria.component.html',
  styleUrls: ['./producto-categoria.component.css']
})
export class ProductoCategoriaComponent implements OnInit {
  constructor(private _activatedRoute:ActivatedRoute ,private categoriaService : AtributoService , private __productosService:ProductosService, private _location: Location) { }
  JsonProducto = new Array();
  i;
  countGlobal = 0;
  auxGlobal;
  auxTwoGlobal;
  categoriaName;
  ngOnInit() {
    console.log(this.Listar());
  }
  Listar(){
    this.countGlobal = 0;
    this.__productosService.listProduct()
    .map((response) => response.json())
    .subscribe((data) => {
      this.auxTwoGlobal = data; 
      const categoria = this._activatedRoute.snapshot.paramMap.get('categoria');
      this.categoriaName = categoria;
      this.categoriaService.CrudFunction(10,"",0,0)
      .map((response) => response.json())
      .subscribe((data) => {
        this.categoriaService.getJsonForName(categoria,data)
        .subscribe((data) =>{
          for(this.i in this.auxTwoGlobal){
            if(this.auxTwoGlobal[this.i].p_atributo == data.a_id){
              this.JsonProducto[this.countGlobal] = this.auxTwoGlobal[this.i];
              this.countGlobal++;
            }
          }
        });
      
      });
      console.log(categoria);      
      console.log(this.JsonProducto);
  });
  }
}
