import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

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
    public albumsService: AlbumsService,
    public loadCtrl: LoadingController
  ) {}

  ionViewDidLoad() {
    let load = this.loadCtrl.create({
      content: 'Cargando la informacion'
    });
    load.present();
    setTimeout(()=>{
      this.albums = this.albumsService.getALL();
      load.dismiss();
    },1);
  }

  goToAlbumDetailPage(){
    this.navCtrl.push( AlbumDetailPage );
  }

}
