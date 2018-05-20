import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  ListOfProducts:any;

  constructor(private productService : ProductosService) { }

  ngOnInit() {
    this.productService.listProductToFront()
    .map((response) => response.json())
    .subscribe((data) => { 
    this.ListOfProducts = data;
  });
  }


  
}
