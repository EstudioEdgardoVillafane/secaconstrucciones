import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeccionService } from '../seccion.service';
import { ProductosService } from '../productos.service';
import { Location } from '@angular/common';
import { AtributoService } from '../atributo.service';
import { EtiquetaService } from '../etiqueta.service';
import { SubAtributoService } from '../sub-atributo.service';

@Component({
  selector: 'app-producto-categoria',
  templateUrl: './producto-categoria.component.html',
  styleUrls: ['./producto-categoria.component.css']
})
export class ProductoCategoriaComponent implements OnInit {
  constructor(private subatributoService : SubAtributoService, private etiquetaService : EtiquetaService ,private _activatedRoute:ActivatedRoute ,private categoriaService : AtributoService , private __productosService:ProductosService, private _location: Location) { }
  Desde = 0;
  Hasta = 9;
  PaginaActual = 1;
  CantidadDePaginas;

  JsonProducto = new Array();
  i;
  countGlobal = 0;
  auxGlobal;
  auxTwoGlobal;
  categoriaName;
  JsonEtiquetas;
  JsonOptions = new Array();
  IdCategoriaPrivate;
  ngOnInit() {
    console.log(this.Listar());
    this.doListOfEtiquetas();
    this.doListOfOptions();
  }
  doListOfEtiquetas(){
    this.etiquetaService.listEtiquetas()
    .map((response) => response.json())
    .subscribe((data) => {
      this.JsonEtiquetas = data;
    });
  }
  filterOption(idSubatributo){
    this.JsonProducto.length = 0;
    this.countGlobal = 0;
    console.log("este es el json");
    console.log(this.auxTwoGlobal);

    for(this.i in this.auxTwoGlobal){
      if(this.auxTwoGlobal[this.i].p_subatributo == idSubatributo){
        this.JsonProducto[this.countGlobal] = this.auxTwoGlobal[this.i];
        this.countGlobal++;
      }
    }
    console.log(this.JsonProducto);
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
          this.IdCategoriaPrivate = data.a_id;
          for(this.i in this.auxTwoGlobal){
            if(this.auxTwoGlobal[this.i].p_atributo == data.a_id){
              this.JsonProducto[this.countGlobal] = this.auxTwoGlobal[this.i];
              this.countGlobal++;
            }
          }
          this.doListOfOptions();
          this.CantidadDePaginas = this.JsonProducto.length/9;
          this.CantidadDePaginas = Math.ceil(this.CantidadDePaginas);
        });
      
      });
  });
  }
  nextPag(){
    if(this.PaginaActual < this.CantidadDePaginas){
      this.PaginaActual++;
      this.Desde = this.Desde + 9;
      this.Hasta = this.Hasta + 9;
    }
  }
  prevPag(){
    if(this.PaginaActual > 1){
      this.PaginaActual--;
      this.Desde = this.Desde - 9;
      this.Hasta = this.Hasta - 9;
    }
  }
  doListOfOptions(){
    this.subatributoService.CrudFunction(1,0,"",0)
    .map((response) => response.json())
    .subscribe((data)=> {
      this.countGlobal = 0;
      for(this.i in data){
        if(data[this.i].su_atributo == this.IdCategoriaPrivate){
          this.JsonOptions[this.countGlobal] = data[this.i];
          this.countGlobal++;
        }
      }
    });
  }
}
