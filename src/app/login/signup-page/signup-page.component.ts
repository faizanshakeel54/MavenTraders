import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ValidationFunctions } from './Validations';

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
         name : ['' , [Validators.required, Validators.minLength(3),Validators.maxLength(25)]],
         email : ['' , [Validators.required, Validators.email]],
         username : ['' , [Validators.required , Validators.minLength(5) , Validators.maxLength(15)]],
         password : ['' , [Validators.required, Validators.minLength(6)]],
         cPassword : ['' , [Validators.required, Validators.minLength(6)]],
         otherEmail : this.fb.array([])
    },
    {
        validator : ValidationFunctions.passwordMatch
    });
  }



  onSubmit(d)
  {

    console.log(d.value);
    d.reset();

  }

  addOtherEmail()
  {
     (this.signupForm.get('otherEmail') as FormArray).push(this.fb.control(''));
  }

  deleteOtherEmail(i)
  {
    (this.signupForm.get('otherEmail') as FormArray).removeAt(i);
  }

}
