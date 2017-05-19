import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DashboardPage } from '../dashboard/dashboard';

@IonicPage({
  name: 'login',
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    console.warn('Login com o Facebook..');

    setTimeout(() => {
      this.navCtrl.push('dashboard');
    }, 300);
  }
}
