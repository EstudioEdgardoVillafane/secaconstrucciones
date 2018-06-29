import { Component, OnInit } from '@angular/core';
import { PreguntasService } from '../preguntas.service';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-backend-preguntas',
  templateUrl: './backend-preguntas.component.html',
  styleUrls: ['./backend-preguntas.component.css']
})
export class BackendPreguntasComponent implements OnInit {

  constructor(private PreguntasService : PreguntasService, private route : ActivatedRoute, private router : Router) { }
  dataSource = new MatTableDataSource();
  selection = new SelectionModel(true, []);
  displayedColumns : string[] = ['pr_id', 'pr_cliente','p_nombre'];
  
  ngOnInit() {
    this.PreguntasService.doList()
    .map((response) => response.json())
    .subscribe((data) => {
      this.dataSource.data = data;
        console.log(data);
      }); 
  }
  aux;
  handdleView(){
    this.aux = this.selection.selected;
    (this.selection.selected.length == 1) ? this.goTo(this.aux[0].pr_id) : ' any ' ; 
  }
  goTo(id){
    this.router.navigate(['../../backend/preguntas-edit/'+id], {relativeTo: this.route});

  }
   isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

}
