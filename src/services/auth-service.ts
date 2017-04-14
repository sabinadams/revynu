import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

/*
  Generated class for the TestService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {

  constructor(public http: Http) {
  }

  login(credentials){
  	return this.http.post(`https://revynu.herokuapp.com/login`, credentials).map( (res) => {
      return res.json();
    })
  }
  
  register(data){
    return this.http.post(`https://revynu.herokuapp.com/register`, data).map( (res) => {
      return res.json();
    });
  }

  forgotPasswordEmail(email){
    return this.http.post(`http://revynu.herokuapp.com/forgotpasswordemail`, {email: email}).map( (res) => {
      return res.json();
    });
  }

  changePassword(data){
    return this.http.post(`http://revynu.herokuapp.com/forgotpasschangepass`, data).map( (res) => {
      return res.json();
    });
  }
}
