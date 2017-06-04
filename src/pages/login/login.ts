import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams
} from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { LoginService } from './login.service';

import { LocalStorage } from '../../services/LocalStorage';

@IonicPage({
  name: 'login',
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  scopes: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fb: Facebook,
    private api: LoginService,
    public storage: LocalStorage) {

    this.scopes = ['public_profile', 'email', 'user_birthday'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this.fb
      .login(this.scopes)
      .then(this._handleLogin.bind(this))
      .catch(this._handleError.bind(this));
  }

  getUserInfo() {
    const fields = '/me?fields=email,id,name,picture.height(961),birthday';

    this.fb
      .api(fields, this.scopes)
      .then(this._handleApi.bind(this))
      .catch(this._handleError.bind(this));
  }

  _handleLogin(res) {
    if (res.status !== 'connected') {
      console.warn('O status do login foi:', res.status);
    } else {
      this.getUserInfo();
    }
  }

  _handleApi(obj) {
    this.storage.set('user_info', obj);

    this.api.setCredentials(obj);

    setTimeout(() => {
      this.navCtrl.push('dashboard');
    }, 300);
  }

  _handleError(err) {
    console.info('Algum erro aconteceu: ', err);
  }
}
