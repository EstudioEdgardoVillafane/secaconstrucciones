import { Component, OnInit } from '@angular/core';
import {ProductosService} from '../productos.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ;


  constructor(private productService : ProductosService) { }

  ngOnInit() {
  
  }

}
