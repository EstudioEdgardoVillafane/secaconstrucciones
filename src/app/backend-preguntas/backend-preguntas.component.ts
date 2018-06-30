import { Component, OnInit, ViewChild } from '@angular/core';
import { PreguntasService } from '../preguntas.service';
import {SelectionModel} from '@angular/cdk/collections';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {MatPaginator, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-backend-preguntas',
  templateUrl: './backend-preguntas.component.html',
  styleUrls: ['./backend-preguntas.component.css']
})
export class BackendPreguntasComponent implements OnInit {

  constructor(private PreguntasService : PreguntasService, private route : ActivatedRoute, private router : Router, private snackBar : MatSnackBar) { }
  dataSource = new MatTableDataSource();
  selection = new SelectionModel(true, []);
  displayedColumns : string[] = ['pr_id', 'pr_cliente','p_nombre','cp_nombre'];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngOnInit() {
    this.PreguntasService.doList()
    .map((response) => response.json())
    .subscribe((data) => {
      this.dataSource.data = data;
    }); 
    this.dataSource.paginator = this.paginator;
  }
  
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 6000,
    });
  }

  aux;
  handdleView(){
    this.aux = this.selection.selected;
    (this.selection.selected.length == 1 && this.aux[0].pr_estado == 1) ? this.goTo(this.aux[0].pr_id) : this.openSnackBar('Error - Verifique que haya seleccionado un solo registro y que el mismo no haya sido respondido', 'Ok!') ; 
  }
  goTo(id){
    this.router.navigate(['../../backend/preguntas-edit/'+id], {relativeTo: this.route});
  }
  
  handdleDelete(){
    (this.selection.selected.length != 0) ? this.deleteResponse() : this.openSnackBar('Error - Seleccione uno o más registro para poder archivar.', 'Ok!')
  }

  deleteResponse(){
    let aux = this.selection.selected;
    
    for(let i in aux){
    console.log(aux[i].pr_id);
      this.PreguntasService.doDelete(aux[i].pr_id)
      .subscribe(data => console.log(data));
    }
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
