import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialPage');
  }

  goToLoginPage(){
    this.navCtrl.push( LoginPage );
  }

  goToRegisterPage(){
    this.navCtrl.push( RegisterPage );
  }

}
