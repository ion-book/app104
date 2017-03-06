import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TutorialPage } from '../pages/tutorial/tutorial';
import { HomePage } from '../pages/home/home';
import { ButtonsPage } from '../pages/buttons/buttons';
import { GridsPage } from '../pages/grids/grids';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage = TutorialPage;

  @ViewChild(Nav) nav: Nav;

  menuPages: any[] = [
    {
      title: 'Timeline',
      icon: 'home',
      component: HomePage,
      tabIndex: 0
    },
    {
      title: 'Top',
      icon: 'home',
      component: HomePage,
      tabIndex: 1
    },
    {
      title: 'Users',
      icon: 'home',
      component: HomePage,
      tabIndex: 2
    },
  ];

  examplesPages: any[] = [
    {
      title: 'Grids',
      icon: 'home',
      component: ButtonsPage
    },
    {
      title: 'Buttons',
      icon: 'home',
      component: GridsPage
    },
  ];

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openTabPage(page){
    this.nav.setRoot( page.component, {
      tabIndex: page.tabIndex
    });
  }

  openPage(page){
    this.nav.setRoot(page.component);
  }

  logout(){
    this.nav.setRoot( TutorialPage );
  }
}
