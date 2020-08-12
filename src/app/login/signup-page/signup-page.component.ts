import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  signupForm : FormGroup;
  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({

    })
  }

}
