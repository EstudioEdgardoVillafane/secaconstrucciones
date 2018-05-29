import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.css']
})
export class SubMenuComponent implements OnInit {

  categorias :Array<object> 
  headMessage : string;
  selectedItem : string;
  setClickedItem : Function;
  
  

constructor(){
    this.categorias = [
      {
        nombre : "Tecnología",
        subCategoria:[ 'enero','febrero','marzo','abril']
      },
      {
        nombre : "Música",
        subCategoria:[ 'mayo','junio','julio','agosto'],
        subCategoria2:[ 'gfjjj','sdsdasd','34324','kjjkjk','wedqejkjdkjkj','42234','djijknkcjj','sdersg']
      },
      {
        nombre : "Arte",
        subCategoria:[ 'septiembre','octubre','noviembre','diciembre']
      },
      {
        nombre : "Televisión",
        subCategoria:[ 'lunes','martes','miércoles','jueves']
      },
  
  ];

    this.setClickedItem = function(index){
        this.selectedItem = index;
    }
   
};

  ngOnInit() {
  }


}

