import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoritesPage } from './favorites';

@NgModule({
  declarations: [
    FavoritesPage,
  ],
  imports: [
    BrowserModule,
    IonicPageModule.forChild(FavoritesPage),
  ],
  exports: [
    FavoritesPage
  ]
})
export class FavoritesPageModule {}
