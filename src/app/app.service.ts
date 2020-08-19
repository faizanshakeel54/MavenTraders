import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public http : HttpClient) { }


  public BaseURl = environment.BaseUrl1;

  public login = (obj) : Observable<any[]> =>{
    return this.http.post<any[]>(this.BaseURl + 'Admin/LoginUserAdmin' , obj);
  }


  public getAllCommodities=(obj) : Observable<any[]>=>{

   return this.http.post<any[]>(this.BaseURl + '/Admin/GetAllCommodities' , obj);

  }


 public loggedIn=()=>
 {
   return !!localStorage.getItem('auth_Token');
 }



}
