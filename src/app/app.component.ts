import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TutorialPage } from '../pages/tutorial/tutorial';
import { HomePage } from '../pages/home/home';
import { ButtonsPage } from '../pages/buttons/buttons';
import { GridsPage } from '../pages/grids/grids';
import { StylesPage } from '../pages/styles/styles';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage = TutorialPage;

  @ViewChild(Nav) nav: Nav;

  menuPages: any[] = [
    {
      title: 'Timeline',
      icon: 'images',
      component: HomePage,
      tabIndex: 0
    },
    {
      title: 'Top',
      icon: 'star',
      component: HomePage,
      tabIndex: 1
    },
    {
      title: 'Users',
      icon: 'people',
      component: HomePage,
      tabIndex: 2
    },
  ];

  examplesPages: any[] = [
    {
      title: 'Grids',
      icon: 'grid',
      component: GridsPage,
    },
    {
      title: 'Buttons',
      icon: 'archive',
      component: ButtonsPage
    },
    {
      title: 'Styles',
      icon: 'logo-sass',
      component: StylesPage
    },
  ];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
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
