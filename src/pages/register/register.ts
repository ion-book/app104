import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';

import { MyValidators } from '../../validators/validators';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  myForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuiler: FormBuilder
  ) {
    this.myForm = this.formBuiler.group({
      'email': ['', [Validators.required, Validators.minLength(10), Validators.maxLength(15)]],
      'nickname': ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      'age': ['', [Validators.required, MyValidators.isOld]],
      'passwordGroup': this.formBuiler.group({
        'password': ['',[Validators.required]],
        'confirmPassword': ['', [Validators.required]],
      }, {
        validator: MyValidators.passwordMatcher
      }),
      'rockband': ['3', [Validators.required]],
      'date': ['', [Validators.required]],
      'children': [5],
      'language': ['go'],
      'enablePush': [false],
      'enableEmail': [true],
      'vainilla': [false],
      'chocolate': [true],
      'fresa': [true]
    });

    let obj = {
      'email': 'nicolas@gmail.com',
      'age': 19,
      'children': 10,
      'nickname': 'nicobytes'
    }

    this.myForm.patchValue(obj);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  saveData(event: Event){
    event.preventDefault();
    console.log(this.myForm.value);
    console.log(this.myForm.value.age);
    console.log(this.myForm.value.nickname);
    console.log(this.myForm.value.passwordGroup.password);
    console.log(this.myForm.value.passwordGroup.confirmPassword);
  }

  goToHomePage(){
    this.navCtrl.setRoot( HomePage );
  }

}
