import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { catchError, map, tap } from 'rxjs/operators';
/*** Services ****/
import {ProductosService} from '../productos.service';
import { SeccionService } from '../seccion.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

listSeccion
  constructor(private productService : ProductosService, private seccionService : SeccionService) { }

  ngOnInit() {
    this.listedSeccionsFronted();
  }
  listedSeccionsFronted(){
    this.seccionService.CrudFunction(1,0,"0",0)
    .map((response)=> response.json())
    .subscribe((data)=>{
      console.log(data);
      this.listSeccion = data;
    })
  }

}
