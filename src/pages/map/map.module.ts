import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { MapPage } from './map';

@NgModule({
  declarations: [
    MapPage,
  ],
  imports: [
    BrowserModule,
    IonicPageModule.forChild(MapPage),
  ],
  exports: [
    MapPage
  ]
})
export class MapPageModule {}
