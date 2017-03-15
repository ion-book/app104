import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AlbumsService } from '../../providers/albums-service';


@Component({
  selector: 'page-top',
  templateUrl: 'top.html'
})
export class TopPage {

  query: string = '';

  albums: any[] = [];
  albumsCopy: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public albumsService: AlbumsService
  ) {}

  ionViewDidLoad() {
    this.albums = this.albumsService.getALL();
    this.albumsCopy = this.albums;
  }

  onInput(){
    this.albums = this.albumsCopy;
    let val = this.query;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.albums = this.albums.filter((album) => {
        return (album.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
