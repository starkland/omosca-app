import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'modal.html',
})
export class CalendarModal {
  placeData: any;

  constructor(
    public params: NavParams,
    public viewCtrl: ViewController
    ) {

    if (params.get('evtId')) {
      this.placeData = params.get('evtId');
    }
  }

  dismiss() {
   let data = {};
   this.viewCtrl.dismiss(data);
  }
}
