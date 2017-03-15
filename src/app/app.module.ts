import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { SettingsPage } from '../pages/settings/settings';
import { TopPage } from '../pages/top/top';
import { UsersPage } from '../pages/users/users';
import { TimelinePage } from '../pages/timeline/timeline';
import { GridsPage } from '../pages/grids/grids';
import { ButtonsPage } from '../pages/buttons/buttons';
import { AlbumDetailPage } from '../pages/album-detail/album-detail';
import { GalleryPage } from '../pages/gallery/gallery';

import { AlbumsService } from '../providers/albums-service';
import { UserService } from '../providers/user-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TutorialPage,
    RegisterPage,
    LoginPage,
    ProfilePage,
    SettingsPage,
    TopPage,
    UsersPage,
    TimelinePage,
    GridsPage,
    ButtonsPage,
    AlbumDetailPage,
    GalleryPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TutorialPage,
    RegisterPage,
    LoginPage,
    LoginPage,
    ProfilePage,
    SettingsPage,
    TopPage,
    UsersPage,
    TimelinePage,
    GridsPage,
    ButtonsPage,
    AlbumDetailPage,
    GalleryPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AlbumsService,
    UserService
  ]
})
export class AppModule {}
