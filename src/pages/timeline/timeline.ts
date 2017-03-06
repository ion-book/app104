import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AlbumsService } from '../../providers/albums-service';
import { AlbumDetailPage } from '../album-detail/album-detail';

@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html'
})
export class TimelinePage {

  albums: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public albumsService: AlbumsService
  ) {}

  ionViewDidLoad() {
    this.albums = this.albumsService.getALL();
  }

  goToAlbumDetailPage(){
    this.navCtrl.push( AlbumDetailPage );
  }

}
