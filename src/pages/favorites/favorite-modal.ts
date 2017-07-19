import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'modal.html',
})
export class FavCard {
  placeData: any;

  constructor(
    public params: NavParams,
    public viewCtrl: ViewController
    ) {

    if (params.get('favId')) {
      this.placeData = params.get('favId');
    }
  }

  dismiss() {
   let data = {};
   this.viewCtrl.dismiss(data);
  }

  openEvent(obj) {
    console.warn('Evento clicado: ', obj);
  }
}
