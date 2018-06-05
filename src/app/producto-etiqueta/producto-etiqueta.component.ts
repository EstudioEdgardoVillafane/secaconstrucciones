import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EtiquetaService } from '../etiqueta.service';

@Component({
  selector: 'app-producto-etiqueta',
  templateUrl: './producto-etiqueta.component.html',
  styleUrls: ['./producto-etiqueta.component.css']
})
export class ProductoEtiquetaComponent implements OnInit {

  constructor(private _activatedRoute:ActivatedRoute ,private etiquetaService: EtiquetaService , private __productosService:ProductosService, private _location:Location) { }
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
  ngOnInit() {
    console.log(this.Listar());
  }
  Listar(){
    this.countGlobal = 0;
    this.__productosService.listProduct() //Listado de productos
    .map((response) => response.json())
    .subscribe((data) => {
      this.auxTwoGlobal = data;  // Guardamos el listado de los productos en un auxiliar
      const etiqueta = this._activatedRoute.snapshot.paramMap.get('etiqueta');
      this.etiquetaService.listEtiquetas()  //Listado de etiquetas
      .map((response) => response.json())
      .subscribe((data) => {
        this.etiquetaService.getJsonForName(etiqueta,data)  //Buscar la id de la etiqueta pasada por get
        .subscribe((data) =>{
          this.idOfEtiqueta = data.e_id;    //Se guarda la ID del la etiqueta filtrada por get
          console.log("esta seria la id de la etiqueta filtrada");
          console.log(this.idOfEtiqueta);
        this.etiquetaService.doListJSON()   //Listado de relacion
        .map((response) => response.json())
        .subscribe((Data) => {
          console.log("este seria el listado de las relaciones");
          console.log(Data);
          this.countGlobal = 0;
          for(this.i in Data){
            if(Data[this.i].re_etiqueta == this.idOfEtiqueta){
              this.saveIdOfProducts[this.countGlobal] = Data[this.i].re_idproducto;
              this.countGlobal++;
            }
          }
          this.countGlobal = 0;
          for(this.k in this.saveIdOfProducts){
            for(this.i in this.auxTwoGlobal){
              if(this.auxTwoGlobal[this.i].p_id == this.saveIdOfProducts[this.k]){
                this.JsonProductos[this.countGlobal] = this.auxTwoGlobal[this.i];
                this.countGlobal++;
              }
            }
          }
          console.log("este es el listado de productos, creo.");
          console.log(this.JsonProductos);          
        });
        });
      
      });
      console.log(etiqueta);      
      console.log(this.JsonGlobal);
  });
  }

}
