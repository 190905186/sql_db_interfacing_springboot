import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl="http://localhost:3000/register"
  constructor(private http:HttpClient) { 
  }
  registerUser(user: { userName: string; email: string; password: string; }){
    return this.http.post<any>(this._registerUrl,user)
  }
}
