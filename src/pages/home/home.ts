import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { TimelinePage } from '../timeline/timeline'
import { TopPage } from '../top/top'
import { UsersPage } from '../users/users'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root: any = TimelinePage;
  tab2Root: any = TopPage;
  tab3Root: any = UsersPage;

  mySelectedIndex: number = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(true, 'menu');
    this.mySelectedIndex = this.navParams.get('tabIndex')|| 0;
  }

}