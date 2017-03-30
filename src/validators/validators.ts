import { FormControl, AbstractControl } from '@angular/forms';

export class MyValidators{

  static isOld(control: FormControl){
    let value = control.value;
    if(value >= 18){
      return null;
    }else{
      return {'isold': true}
    }
  }

  static passwordMatcher(group: AbstractControl){
    let password = group.get('password').value;
    let confimPassword = group.get('confirmPassword').value;
    if(password === confimPassword){
      return null;
    }else{
      return {'nomatch': true};
    }

  }

}