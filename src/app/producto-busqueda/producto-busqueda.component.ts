import { Component, OnInit } from '@angular/core';
import { SubAtributoService } from '../sub-atributo.service';
import { EtiquetaService } from '../etiqueta.service';
import { ActivatedRoute } from '@angular/router';
import { AtributoService } from '../atributo.service';
import { ProductosService } from '../productos.service';
import { Router } from '@angular/router';
import { SeccionService } from '../seccion.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-producto-busqueda',
  templateUrl: './producto-busqueda.component.html',
  styleUrls: ['./producto-busqueda.component.css']
})
export class ProductoBusquedaComponent implements OnInit {

  constructor(private router: Router, private seccionService: SeccionService ,private _activatedRoute:ActivatedRoute ,private etiquetaService: EtiquetaService , private __productosService:ProductosService, private _location:Location) { }

  Desde = 0;
  Hasta = 9;
  PaginaActual = 1;
  CantidadDePaginas;

  ListProductoEtiqueta = new Array();
  JsonProductos = new Array();
  i;
  k;
  saveIdOfProducts = new Array();
  countGlobal = 0;
  auxGlobal;
  idOfEtiqueta;
  auxTwoGlobal;
  JsonGlobal = new Array();
  JsonEtiquetas;
  JsonSecciones;

  ngOnInit(){
    console.log(this.Listar());
    this.doListOfEtiquetas();
    this.doListOfSecciones();
  }

  doListOfSecciones(){
    this.seccionService.CrudFunction(1,0,"",0)
    .map((response) => response.json())
    .subscribe((Data) => {
      this.JsonSecciones = Data;
    })
  }
  doListOfEtiquetas(){
    this.etiquetaService.listEtiquetas()
    .map((response) => response.json())
    .subscribe((data) => {
      this.JsonEtiquetas = data;
    });
  }

  Listar(){
    this.countGlobal = 0;
    this.__productosService.listProduct() //Listado de productos
    .map((response) => response.json())
    .subscribe((data) => {
      this.auxTwoGlobal = data;  // Guardamos el listado de los productos en un auxiliar
      const nombre = this._activatedRoute.snapshot.paramMap.get('producto');
          for(this.i in data){
            if(data[this.i].p_nombre.toUpperCase().match(nombre.toUpperCase())){
              this.JsonProductos[this.countGlobal] = data[this.i];
              this.countGlobal++;
            }
          }
          this.CantidadDePaginas = this.JsonProductos.length/9;
          this.CantidadDePaginas = Math.ceil(this.CantidadDePaginas);
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
