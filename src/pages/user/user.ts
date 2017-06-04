import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams
} from 'ionic-angular';

import { LocalStorage } from '../../services/LocalStorage';

@IonicPage({
  name: 'user',
})
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  userData: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: LocalStorage) {

    this.userData = {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
    this.displayUserInfo();
  }

  displayUserInfo() {
    const userInfo = this.storage.get('user_info');

    if (!userInfo) {
      // chama pra API.
    } else {
      this.userData = userInfo;
      this.userData.photo = userInfo.picture.data.url;
    }
  }

  logout() {
    this.storage.remove('user_info');

    setTimeout(() => {
      this.navCtrl.push('login');
    }, 300);
  }
}
