/**
*
*******************************************
*** Project Name: Seca Construcciones   ***
*** @Description: Ecomerce              ***
*** @Author: Matias Balboa              ***
*** @Tecnology: Angular5                ***
*** @Year: 2018                         ***
*** @Version: 1.0.0                     ***
*******************************************
*
*/
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { catchError, map, tap } from 'rxjs/operators';
/**Services*/
import { BackendClienteService } from './../backend-cliente.service';


@Component({
  selector: 'app-validacion-cliente',
  templateUrl: './validacion-cliente.component.html',
  styleUrls: ['./validacion-cliente.component.css']
})
export class ValidacionClienteComponent implements OnInit {
validationCode;
  constructor(private backendClienteService : BackendClienteService) { }

  ngOnInit() {
  }
  validateAcout(){
    this.validationCode = document.getElementById("validacion");
    
    this.backendClienteService.validationAcout(this.validationCode.value)
    .subscribe((data)=>{
      console.log(this.validationCode.value)
      console.log(data)
    });
  }

}
