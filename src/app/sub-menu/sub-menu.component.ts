import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.css']
})
export class SubMenuComponent implements OnInit {

  categorias = new Array();
  headMessage : string;
  selectedItem : string;
  setClickedItem : Function;


constructor(private productosService : ProductosService){
  //   this.categorias = [
  //     {
  //       nombre : "Tecnología",
  //       subCategoria:[ 'enero','febrero','marzo','abril']
  //     },
  //     {
  //       nombre : "Música",
  //       subCategoria:[ 'mayo','junio','julio','agosto']
  //     },
  //     {
  //       nombre : "Arte",
  //       subCategoria:[ 'septiembre','octubre','noviembre','diciembre']
  //     },
  //     {
  //       nombre : "Televisión",
  //       subCategoria:[ 'lunes','martes','miércoles','jueves']
  //     },
  
  // ];

  //   this.setClickedItem = function(index){
  //       this.selectedItem = index;
  //   }


};

  ngOnInit() {
    this.productosService.doListOfCategorias()
    .map((response) => response.json())
    .subscribe((data) => {
      this.categorias = data;
    })
}
mostrar(){
  console.log(this.categorias);
}

}

