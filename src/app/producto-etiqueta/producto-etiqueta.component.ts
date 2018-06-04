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
  i;
  countGlobal = 0;
  auxGlobal;
  auxTwoGlobal;
  ngOnInit() {
    console.log(this.Listar());
  }
  Listar(){
    this.countGlobal = 0;
    this.__productosService.listProduct()
    .map((response) => response.json())
    .subscribe((data) => {
      this.auxTwoGlobal = data; 
      const etiqueta = this._activatedRoute.snapshot.paramMap.get('etiqueta');
      this.etiquetaService.listEtiquetas()
      .map((response) => response.json())
      .subscribe((data) => {
        this.etiquetaService.getJsonForName(etiqueta,data)
        .subscribe((data) =>{
          for(this.i in this.auxTwoGlobal){
            if(this.auxTwoGlobal[this.i].re_etiqueta == data.e_id){
              this.ListProductoEtiqueta[this.countGlobal] = this.auxTwoGlobal[this.i];
              this.countGlobal++;
            }
          }
        });
      
      });
      console.log(etiqueta);      
      console.log(this.ListProductoEtiqueta);
  });
  }

}
