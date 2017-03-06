import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController) {

  }

}