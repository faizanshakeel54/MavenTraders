import { Injectable } from '@angular/core';
import { CanActivate , Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public _authService : AppService , public routes : Router){ }

  canActivate() : boolean {

    if(this._authService.loggedIn())
    {
      return true;
    }
    else
    {
      this.routes.navigate(['dashboard']);
      return false;
    }

  }

}
