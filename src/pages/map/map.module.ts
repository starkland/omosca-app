import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';

import { MapPage } from './map';

@NgModule({
  declarations: [
    MapPage,
  ],
  imports: [
    IonicPageModule.forChild(MapPage),
  ],
  exports: [
    MapPage
  ],
  providers: [
    Geolocation,
    GoogleMaps,
  ],
})
export class MapPageModule {}
