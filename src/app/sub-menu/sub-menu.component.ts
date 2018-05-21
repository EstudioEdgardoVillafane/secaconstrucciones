import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.css']
})
export class SubMenuComponent implements OnInit {

  categorias :Array<object> 
  headMessage : string;
  selectedList : string;
  setClickedList : Function;


constructor(){
    this.categorias = [
      {
        nombre : "Tecnología",
        subCateg:[ 'celulares y telefonos','televisores','computación','elecgtronica, audio y video'
        ]
      },
      {
        nombre : "Música",
        subCateg:[ 'celulares y telefonos','televisores','computación','elecgtronica, audio y video'
        ]
      },
  
  ];

    this.setClickedList = function(index){
        this.selectedList = index;
    }
};

  ngOnInit() {
  }

}
