import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

import { LoginPage } from './login';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
  exports: [
    LoginPage
  ],
  providers: [
    Facebook
  ]
})
export class LoginPageModule {}
