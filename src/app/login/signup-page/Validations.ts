import { AbstractControl, ValidationErrors } from '@angular/forms';

export class ValidationFunctions{


  static a: boolean = false;
  static passwordMatch(control : AbstractControl)
  {
        let npassword = control.get('password');
        let cPassword = control.get('cPassword');

        if(npassword.value != cPassword.value)
        {
           control.get('cPassword').setErrors({passwordMatch : true});
        }
        else
        {
        return null;
      }
    }
}
