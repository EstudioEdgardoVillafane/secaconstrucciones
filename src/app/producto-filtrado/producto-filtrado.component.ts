import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EtiquetaService } from '../etiqueta.service';
import { ProductosService } from '../productos.service';
import { Location } from '@angular/common';
import { SeccionService } from '../seccion.service';

@Component({
  selector: 'app-producto-filtrado',
  templateUrl: './producto-filtrado.component.html',
  styleUrls: ['./producto-filtrado.component.css']
})
export class ProductoFiltradoComponent implements OnInit {

  constructor(private _activatedRoute:ActivatedRoute ,private seccionService : SeccionService , private __productosService:ProductosService, private _location: Location) { }
  JsonProducto = new Array();
  i;
  countGlobal = 0;
  auxGlobal;
  auxTwoGlobal;
  seccionName;
  ngOnInit() {
    console.log(this.Listar());
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
          for(this.i in this.auxTwoGlobal){
            if(this.auxTwoGlobal[this.i].p_section == data.s_id){
              this.JsonProducto[this.countGlobal] = this.auxTwoGlobal[this.i];
              this.countGlobal++;
            }
          }
        });
      
      });
      console.log(seccion);      
      console.log(this.JsonProducto);
  });
  }

}
