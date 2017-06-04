import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';

import { LoginPage } from './login';
import { LoginService } from './login.service';

import { LocalStorage } from '../../services/LocalStorage';

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
    Facebook,
    LocalStorage,
    LoginService,
  ]
})
export class LoginPageModule {}
