import { Injectable } from '@angular/core';
import { Facebook } from '@ionic-native/facebook';

import { LocalStorage } from './LocalStorage';

@Injectable()
export class FacebookProvider {
  scopes: any;

  constructor(
    private fb: Facebook,
    public storage: LocalStorage) {

    this.scopes = ['public_profile', 'email', 'user_birthday'];
  }

  login() {
    this.fb
      .login(this.scopes)
      .then(this._handleLogin.bind(this))
      .catch(this._handleError.bind(this));
  }

  _handleLogin(res) {
    if (res.status !== 'connected') {
      console.warn('O status do login foi:', res.status);
    } else {
      this.getUserInfo();
    }
  }

  getUserInfo() {
    const fields = '/me?fields=email,id,name,picture.height(961),birthday';

    this.fb
      .api(fields, this.scopes)
      .then(this._handleApi.bind(this))
      .catch(this._handleError.bind(this));
  }

  _handleApi(obj) {
    console.warn(obj);
    this.storage.set('user_info', obj);

    // this.firebase.setCredentials(obj);
  }

  _handleError(err) {
    console.info('Algum erro aconteceu: ', err);
  }
}

