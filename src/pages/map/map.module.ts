import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';

import { MapPage } from './map';
import { MapService } from './map.service';

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
    MapService,
  ],
})
export class MapPageModule {}
