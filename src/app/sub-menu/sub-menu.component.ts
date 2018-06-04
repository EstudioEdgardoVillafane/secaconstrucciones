import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { SeccionService } from '../seccion.service';
import { AtributoService } from '../atributo.service';
import { ProductoFiltradoComponent } from '../producto-filtrado/producto-filtrado.component';
import { ActivatedRoute, Router } from '@angular/router';

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
  JsonSecciones;
  JsonCategorias;
  JsonOfCategoriasListed = new Array();
  iGlobal;
  countGlobal;

constructor(private productosService : ProductosService, private seccionService: SeccionService, private atributoService : AtributoService, private router: Router){}

  ngOnInit() {
    this.doListOfCategorias();
    this.doListOfSeccion();
  }
  onTabChange(ruta) {
    if (this.router.navigated === false) {
      // Case when route was not used yet
      this.router.navigateByUrl(ruta);
    } else {
      // Case when route was used once or more
      this.router.navigateByUrl('/home').then(
        () => {
          this.router.navigateByUrl(ruta);
        });
    }
  }
  doListOfSeccion() : any {
    this.seccionService.CrudFunction(1,0,"",0)
    .map((response) => response.json())
    .subscribe((data) => {
      this.JsonSecciones = data;
      if(this.JsonSecciones != ""){
        return "Json guardado";
      }
    });
  }
  doListOfCategorias() : any {
    this.atributoService.CrudFunction(10,"",0,0)
    .map((response) => response.json())
    .subscribe((data) => {
      this.JsonCategorias = data;
    })
  }

  overSeccion(idSeccion){
    this.countGlobal = 0;
    this.JsonOfCategoriasListed.length = 0;

    for(this.iGlobal in this.JsonCategorias){
      if(this.JsonCategorias[this.iGlobal].a_seccion == idSeccion){
        this.JsonOfCategoriasListed[this.countGlobal] = this.JsonCategorias[this.iGlobal];
        this.countGlobal++;
      }
    }
    
    console.log(this.JsonOfCategoriasListed);
  }


mostrar(){
  console.log(this.JsonSecciones);
  console.log(this.JsonCategorias);
}

}

