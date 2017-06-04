import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';

import { LoginPage } from './login';

import { LocalStorage } from '../../services/LocalStorage';
import { FacebookProvider } from '../../services/Facebook';
import { FirebaseProvider } from '../../services/Firebase';

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
    FacebookProvider,
    FirebaseProvider,
  ]
})
export class LoginPageModule {}
