import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'favcard',
  template: `
  <ion-header>
    <ion-toolbar>
      <ion-title>
        Description
      </ion-title>

      <ion-buttons start>
        <button ion-button (click)="dismiss()">
          <span ion-text color="primary" showWhen="ios">Cancel</span>
          <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
        </button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <ion-list></ion-list>
  </ion-content>
  `,
  // templateUrl: 'modal.html',
})
export class FavCard {
 constructor(params: NavParams) {
   console.log('UserId', params.get('favId'));
 }
}
