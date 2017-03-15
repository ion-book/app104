import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UserService } from '../../providers/user-service';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  
  users: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userService: UserService
  ) {}

  ionViewDidLoad() {
    this.users = this.userService.getALL();
  }

}
