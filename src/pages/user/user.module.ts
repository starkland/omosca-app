import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { UserPage } from './user';

@NgModule({
  declarations: [
    UserPage,
  ],
  imports: [
    BrowserModule,
    IonicPageModule.forChild(UserPage),
  ],
  exports: [
    UserPage
  ]
})
export class UserPageModule {}
