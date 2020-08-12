import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { from } from 'rxjs';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public loginform : FormGroup;
  constructor(public fb : FormBuilder) { }

  ngOnInit(): void {
    this.loginform = this.fb.group({
         username : ['' , Validators.required],
         password : ['' , Validators.required]
    })
  }

  onSubmit(d)
  {
      console.log(d.value);
      d.reset();
  }
}
