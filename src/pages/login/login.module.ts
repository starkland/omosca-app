import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { LoginPage } from './login';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    BrowserModule,
    IonicPageModule.forChild(LoginPage),
  ],
  exports: [
    LoginPage
  ]
})
export class LoginPageModule {}
