import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { AuthLoginService } from '../auth-login.service';
import { AppService } from 'src/app/app.service';
import { loadavg } from 'os';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public b : boolean = false;
  public loginform : FormGroup;
  constructor(public fb : FormBuilder, public routes : Router, public Service:AppService) { }

  ngOnInit(): void {
    this.loginform = this.fb.group({
         username : ['' , Validators.required],
         password : ['' , Validators.required]
    })
  }

  routingCall(route)
  {
    this.routes.navigate([route]);
  }
  onSubmit(d)
  {
      console.log(d.value);
      d.reset();
  }

  public isValidate()
  {

    let data = {
      email : this.loginform.controls['username'].value,
      password : this.loginform.controls['password'].value
    }

    this.Service.login(data).subscribe((res : any)=>{
      console.log(res);
      if(res.status == true)
      {
        localStorage.setItem('auth_Token' , res.data.auth_token);
        localStorage.setItem('user_id' , res.data.admin_id);
        this.routes.navigate(["dashboard"])
      }
      else
      {
        alert("Wrong Username or Password");
      }
    })
    }


  }

