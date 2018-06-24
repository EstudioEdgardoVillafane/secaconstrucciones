import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login.service';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
 import { AppComponent } from '../app.component';
 import { Router, ActivatedRoute } from '@angular/router';

 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(private LoginService : LoginService, private router : Router, private route : ActivatedRoute) { }

  UserOnline = true;
  userValue ;
  Listado;
  usuario;
  contrasena;
  BooleanAlertLogin = false;
  Aux : string;
  AlertUser = false;
 
  AlertPassword = false;
 
  onClick(){
    this.usuario=document.getElementById("ub_user");
    this.contrasena= document.getElementById("ub_password");

    if(this.usuario.value == ""){
      this.AlertUser = true;
    }else{
      this.AlertUser = false;
    }

    if(this.contrasena.value == ""){
      this.AlertPassword = true;
    }else{
      this.AlertPassword = false;
    }

    this.LoginService.Conect(
      1,0,this.usuario.value,this.contrasena.value
    )
    .subscribe((data) => {
      console.log(data.text());
     if(data.text()==" 0"){
       this.BooleanAlertLogin = true;
      }else{
        console.log(data);
      //localStorage.setItem("keyTwo","1");    
      this.router.navigate(['../backend'], {relativeTo: this.route});
    }
    });
  }

  ngOnInit() {
    //if(localStorage.getItem("keyTwo") == "1"){
      //location.href="admin771/productos";
    //}
  }

}
