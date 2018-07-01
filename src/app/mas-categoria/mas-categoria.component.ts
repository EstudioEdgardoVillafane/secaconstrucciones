import { Component, OnInit } from '@angular/core';
import { SeccionService } from '../seccion.service';
import { AtributoService } from '../atributo.service';
import { MatTreeNestedDataSource } from '@angular/material';
import { NestedTreeControl } from '@angular/cdk/tree';
import {BehaviorSubject, Observable, of as observableOf} from 'rxjs';

export class FileNode {
  children: FileNode[];
  filename: string;
  type: any;
}

@Component({
  selector: 'app-mas-categoria',
  templateUrl: './mas-categoria.component.html',
  styleUrls: ['./mas-categoria.component.css']
})
export class MasCategoriaComponent implements OnInit {
  nestedTreeControl: NestedTreeControl<FileNode>;
  nestedDataSource: MatTreeNestedDataSource<FileNode>;
  dataChange: BehaviorSubject<FileNode[]> = new BehaviorSubject<FileNode[]>([]);

  constructor(private seccionService: SeccionService, private atributoService: AtributoService) {

  }


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
