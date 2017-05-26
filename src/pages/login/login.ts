import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';


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
    private fb: Facebook) {

    this.scopes = ['public_profile', 'email'];
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
    this.fb
      .api('/me?fields=email,id,name', this.scopes)
      .then(this._handleApi.bind(this))
      .catch(this._handleError.bind(this));
  }

  _handleLogin(res) {
    if (res.status !== 'connected') {
      console.warn('O status do login foi:', res.status);
    } else {
      const fbInfo = {
        accessToken: res.authResponse.accessToken,
        userID: res.authResponse.userID
      };

      // Set some facebook data on session storage
      localStorage.setItem('fb_info', JSON.stringify(fbInfo));

      this.getUserInfo();
    }
  }

  _handleApi(obj) {
    // Set the user data on session storage
    localStorage.setItem('user_info', JSON.stringify(obj));

    setTimeout(() => {
      this.navCtrl.push('dashboard');
    }, 300);
  }

  _handleError(err) {
    console.info('Algum erro aconteceu: ', err);
  }
}
