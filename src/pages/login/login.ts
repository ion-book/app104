import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  data: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  saveData( event: Event ){
    event.preventDefault();
    console.log(this.data);
  }

  goToHomePage(){
    this.navCtrl.setRoot( HomePage );
  }

}
