/**
*  
*******************************************
*** Project Name: Seca Construcciones   ***
*** Description: Ecomerce               ***
*** Author: Cristian Hourcade           ***
*** Tecnology: Angular5                 ***
*** Year: 2018                          ***
*** Version: 1.0.0                      ***
*******************************************
*
*/

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css']
})
export class BackendComponent implements OnInit {

  constructor(private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
  }

  /**** Go to admin771/productos ***/
  goProductos(){
    this.router.navigate(['productos'], {relativeTo: this.route});
  }
  goAtributo(){
    this.router.navigate(['atributo'], {relativeTo: this.route});
  }
  goUsuarios(){
    this.router.navigate(['usuarios'], {relativeTo: this.route});
  }
  goSeccion(){
    this.router.navigate(['seccion'], {relativeTo: this.route});
  }
}
