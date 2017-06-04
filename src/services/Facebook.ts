import { Injectable } from '@angular/core';
import { Facebook } from '@ionic-native/facebook';

import { LocalStorage } from './LocalStorage';
import { FirebaseProvider } from './Firebase';

@Injectable()
export class FacebookProvider {
  scopes: any;

  constructor(
    private fb: Facebook,
    public storage: LocalStorage,
    public firebase: FirebaseProvider) {

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
      throw new Error(`O status do login foi: ${res.status}`);
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
    this.storage.set('fb_info', obj);
    this.firebase.setCredentials(obj);
  }

  _handleError(err) {
    throw new Error(`Algum erro aconteceu: ${err}`);
  }
}

