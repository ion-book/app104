import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';

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
      'email': [''],
      'password': [''],
      'confirmPassword': [''],
      'rockband': [''],
      'date': [''],
      'children': [''],
      'favorite': [''],
      'language': [''],
      'enablePush': [''],
      'enableEmail': ['']
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  saveData(event: Event){
    event.preventDefault();
    console.log(this.myForm.value);
  }

  goToHomePage(){
    this.navCtrl.setRoot( HomePage );
  }

}
