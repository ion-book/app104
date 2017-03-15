import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-album-detail',
  templateUrl: 'album-detail.html'
})
export class AlbumDetailPage {

  photos: any[] = [
    {
      image: 'http://placehold.it/150/92c952'
    },
    {
      image: 'http://placehold.it/150/771796'
    },
    {
      image: 'http://placehold.it/150/24f355'
    },
    {
      image: 'http://placehold.it/150/d32776'
    },
    {
      image: 'http://placehold.it/150/f66b97'
    },
    {
      image: 'http://placehold.it/150/56a8c2'
    },
    {
      image: 'http://placehold.it/150/92c952'
    },
    {
      image: 'http://placehold.it/150/771796'
    },
    {
      image: 'http://placehold.it/150/24f355'
    },
    {
      image: 'http://placehold.it/150/d32776'
    },
    {
      image: 'http://placehold.it/150/f66b97'
    },
    {
      image: 'http://placehold.it/150/56a8c2'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlbumDetailPage');
  }

}
