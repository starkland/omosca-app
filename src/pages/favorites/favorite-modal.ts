import { Component } from '@angular/core';
import {
   NavParams,
   ViewController
} from 'ionic-angular';

@Component({
  templateUrl: 'modal.html',
})
export class FavCard {
  constructor(
    params: NavParams,
    public viewCtrl: ViewController) {
    console.warn(params.get('favId'));
  }

  dismiss() {
   let data = { 'foo': 'bar' };
   this.viewCtrl.dismiss(data);
  }
}
