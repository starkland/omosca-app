import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';

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
    private geolocation: Geolocation,
    private googleMaps: GoogleMaps) {
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

    this.loadMap(this.posObj);
  }

  loadMap(obj) {
    console.warn(obj);

    let element: HTMLElement = document.getElementById('map');
    let map: GoogleMap = this.googleMaps.create(element);

    map.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.warn('Map is ready!');

      // create LatLng object
      let markerPosition: LatLng = new LatLng(obj.lat, obj.lng);

      // create CameraPosition
      let position: CameraPosition = {
        target: markerPosition,
        zoom: 18,
        tilt: 30
      };

      map.moveCamera(position);

      // create new marker
      let markerOptions: MarkerOptions = {
        position: markerPosition,
        title: 'Ionic'
     };
    });
  }
}
