import { Injectable } from '@angular/core';

@Injectable()
export class ProductosService {

  private productos:Productos[] = [
   
    { 
      id:1,
      nombre:'Abamix Impermeable', 
      img:'../../assets/img/tree.png',
      precio:50,
      detalle:' Es una mezcla Adhesiva Cementicia, compuesta por Cemento Portland Gris '
     
    },
    { 
      id:2,
      nombre:'Abamix Premium', 
      img:'../../assets/img/tree.png',
      precio:45,
      detalle:' Es una mezcla Adhesiva Cementícia de '
     
    },
    { 
      id:3,
      nombre:'Revoque fino al Yeso', 
      img:'../../assets/img/tree.png',
      precio:66,
      detalle:' Revoque fino base yeso para interiores con terminación '
     
    },
    { 
      id:4,
      nombre:'Stuko', 
      img:'../../assets/img/tree.png',
      precio:89,
      detalle:'Es una argamasa elaborada '
     
    },
    { 
      id:5,
      nombre:'Pastina impermeable', 
      img:'../../assets/img/tree.png',
      precio:72,
      detalle:'Es una Pastina ideal para el tomado de juntas de '
    },
    { 
      id:6,
      nombre:'Abacoat', 
      img:'../../assets/img/tree.png',
      precio:59,
      detalle:' Mortero cementício compuesto por agregados minerales seleccionados, '
     }
  ]
  
  constructor() { }

  getProductos(){
    return this.productos;
  }

  getProducto(idx: string){
    return this.productos[idx];
  }
}

//Defining the format of the class with an Interface
 export interface Productos{
   id:Number;
   nombre:string;
   img:String;
   precio:Number;
   detalle:string;
 }