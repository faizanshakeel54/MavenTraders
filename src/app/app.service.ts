import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public http : HttpClient) { }


  public BaseURl = environment.BaseUrl;

  public login = (x) : Observable<any[]> =>{
    return this.http.post<any[]>(this.BaseURl + 'Admin/LoginUserAdmin' , x);
  }

 public loggedIn=()=>
 {
   return !!localStorage.getItem('auth_Token');
 }

}
