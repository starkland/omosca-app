import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoritesPage } from './favorites';
import { FavCard } from './favorite-modal';

@NgModule({
  declarations: [
    FavoritesPage,
    FavCard,
  ],
  imports: [
    IonicPageModule.forChild(FavoritesPage),
  ],
  exports: [
    FavoritesPage
  ],
  entryComponents: [
    FavCard,
  ],
})
export class FavoritesPageModule {}
