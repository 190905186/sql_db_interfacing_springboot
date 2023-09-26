import { Component } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationForm={
    userName:"",
  email:"hai@exmaple.com",
  password: ''
  }
  constructor(private _auth:AuthService){

  }
  

  registerUser(){
    this._auth.registerUser(this.registrationForm).subscribe()
  }



}
