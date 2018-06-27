import { Component, OnInit } from '@angular/core';
import { SeccionService } from '../seccion.service';
import { AtributoService } from '../atributo.service';

@Component({
  selector: 'app-mas-categoria',
  templateUrl: './mas-categoria.component.html',
  styleUrls: ['./mas-categoria.component.css']
})
export class MasCategoriaComponent implements OnInit {

  constructor(private seccionService : SeccionService, private atributoService : AtributoService) { }

  JsonSecciones;
  JsonCategorias;

  ngOnInit() {
    this.doListOfCategorias();
    this.doListOfSeccion();
    
  }

  doListOfSeccion() {
    this.seccionService.CrudFunction(1,0,"",0)
    .map((response) => response.json())
    .subscribe((data) => {
      this.JsonSecciones = data;
    });
  }
  doListOfCategorias() : any {
    this.atributoService.CrudFunction(10,"",0,0)
    .map((response) => response.json())
    .subscribe((data) => {
      this.JsonCategorias = data;
    console.log(data);
    })
  }
}
