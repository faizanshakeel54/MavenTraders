import { Injectable } from '@angular/core';
import { element } from 'protractor';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {

  constructor() { }

  public a : Boolean = false;
  public Data = [
    {username : "a@a.com" , password : "a"},
    {username : "b@b.com" , password : "b"},
    {username : "c@c.com" ,  password : "c"}
  ]

  // public login=(x)=>{
  //   this.Data.forEach(element =>{
  //     if(element.username == x.username)
  //     {
  //       if(element.password == x.password)
  //       {
  //         console.log("Password Match!");
  //         return this.a = true;
  //       }
  //     }
  //   });



  // }




}
