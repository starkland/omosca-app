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

import { MapService } from './map.service';

@IonicPage({
  name: 'map',
})
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation,
    private googleMaps: GoogleMaps,
    private mapservice: MapService) {
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
    let markerPosition: LatLng = new LatLng(obj.latitude, obj.longitude);

    let position: CameraPosition = {
      target: markerPosition,
      zoom: 18,
      tilt: 30
    };

    let markerOptions: MarkerOptions = {
      position: markerPosition,
      title: 'YO!'
    };

    this.loadMap(position, markerOptions);
    this.loadMarkers();
  }

  loadMap(position, markerOptions) {
    let element: HTMLElement = document.getElementById('map');
    let map: GoogleMap = this.googleMaps.create(element);

    map.one(GoogleMapsEvent.MAP_READY).then(() => {
      map.moveCamera(position);

      map.addMarker(markerOptions).then((marker: Marker) => {
        marker.showInfoWindow();
      });
    });
  }

  loadMarkers() {
    this.mapservice.getMarkers().then(result => {
      console.warn(result);
    });
  }
}
