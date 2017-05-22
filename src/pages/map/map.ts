import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage({
  name: 'map',
})
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  posObj: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');

    this.getCurrentPosition();
  }

  getCurrentPosition() {
    this.geolocation.getCurrentPosition()
      .then((result) => this.sharePosition(result.coords))
      .catch((err) => console.info(err));
  }

  sharePosition(obj) {
    this.posObj = {
      lat: obj.latitude,
      lng: obj.longitude,
    };
  }

}
