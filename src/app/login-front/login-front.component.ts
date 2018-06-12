import { Component, OnInit } from '@angular/core';
import { BackendClienteService } from '../backend-cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-front',
  templateUrl: './login-front.component.html',
  styleUrls: ['./login-front.component.css']
})
export class LoginFrontComponent implements OnInit {

  constructor(private loginService : BackendClienteService, private route : ActivatedRoute, private router : Router) { }

  clienteObject = new Object();

  Aux; //With this variable we can get an elements html.

  ngOnInit() {
    if(localStorage.getItem("usuario") != ""){
      this.router.navigateByUrl('/home');
    }
  }

  /**
   * We are searching in the dataBase if have some register whit the name of the input field (id=name)
   */
  handleSearchUserInBD(){
    this.Aux = document.getElementById("name");
    this.clienteObject["nameUser"] = this.Aux.value;
    this.Aux = document.getElementById("pass");
    this.clienteObject["passUser"] = this.Aux.value;

    //Now we are send the objet to webService

    this.loginService.generateValidationOfUser(this.clienteObject)
    .subscribe((data) => {
      if(data.text() == " 1"){
        localStorage.setItem("usuario", this.clienteObject["nameUser"]);
        this.router.navigateByUrl('/home');
      }else{
        // Need a validation.
      } 
      console.log(data.text());
    })

  }

}
