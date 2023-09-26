import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginEmail:string="hai@exmaple.com";
  loginPassword: string='';
  onSubmit(){
    console.log(this.loginEmail);
    
    console.log(this.loginPassword);
  }

}
