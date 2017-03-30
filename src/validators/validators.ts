import { FormControl } from '@angular/forms';

export class MyValidators{

  static isOld(control: FormControl){
    let value = control.value;
    if(value >= 18){
      return null;
    }else{
      return {'isold': true}
    }
  }

}