import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EtiquetaService } from '../etiqueta.service';
import { ProductosService } from '../productos.service';
import { Location } from '@angular/common';
import { SeccionService } from '../seccion.service';
import { AtributoService } from '../atributo.service';

@Component({
  selector: 'app-producto-filtrado',
  templateUrl: './producto-filtrado.component.html',
  styleUrls: ['./producto-filtrado.component.css']
})
export class ProductoFiltradoComponent implements OnInit {

  constructor(private _activatedRoute:ActivatedRoute ,private etiquetaService: EtiquetaService, private seccionService : SeccionService , private atributoService: AtributoService, private __productosService:ProductosService, private _location: Location) { }
  Desde = 0;
  Hasta = 9;
  PaginaActual = 1;
  CantidadDePaginas;

  JsonProducto = new Array();
  i;
  countGlobal = 0;
  auxGlobal;
  auxTwoGlobal;
  seccionName;
  IdSeccionPrivate;
  JsonCategories = new Array;
  JsonEtiquetas;
  ngOnInit() {
    console.log(this.Listar());
    var html = document.documentElement;
    html.scrollTop = 0;
  }




  Listar(){
    this.countGlobal = 0;
    this.__productosService.listProduct()
    .map((response) => response.json())
    .subscribe((data) => {
      this.auxTwoGlobal = data; 
      const seccion = this._activatedRoute.snapshot.paramMap.get('seccion');
      this.seccionName = seccion;
      this.seccionService.CrudFunction(1,0,"",0)
      .map((response) => response.json())
      .subscribe((data) => {
        this.seccionService.getJsonForName(seccion,data)
        .subscribe((data) =>{
          this.IdSeccionPrivate = data.s_id;
          for(this.i in this.auxTwoGlobal){
            if(this.auxTwoGlobal[this.i].p_section == data.s_id){
              this.JsonProducto[this.countGlobal] = this.auxTwoGlobal[this.i];
              this.countGlobal++;
            }
          }
          this.doListOfCategories();
          this.doListOfEtiquetas();
          this.CantidadDePaginas = this.JsonProducto.length/9;
          this.CantidadDePaginas = Math.ceil(this.CantidadDePaginas);
        });
      
      });
      console.log(seccion);      
      console.log(this.JsonProducto);
  });
  }
  
  doListOfEtiquetas(){
    this.etiquetaService.listEtiquetas()
    .map((response) => response.json())
    .subscribe((data) => {
      this.JsonEtiquetas = data;
    });
  }
  doListOfCategories(){
    this.atributoService.CrudFunction(10,"",0,0)
    .map((response) => response.json())
    .subscribe((data) => {
      this.countGlobal = 0;
      for(this.i in data){
        if(data[this.i].a_seccion == this.IdSeccionPrivate){
          this.JsonCategories[this.countGlobal] = data[this.i];
          this.countGlobal++;
        }
      }
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
}
