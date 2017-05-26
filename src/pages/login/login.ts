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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fb: Facebook) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    const scopes = ['public_profile', 'email'];

    this.fb
      .login(scopes)
      .then(this._handleLogin.bind(this))
      .catch(this._handleError.bind(this));
  }

  _handleLogin(res) {
    console.warn(res.authResponse);

    // setTimeout(() => {
    //   this.navCtrl.push('dashboard');
    // }, 300);
  }

  _handleError(err) {
    alert('ERROR!');
    console.info(err);
  }
}
