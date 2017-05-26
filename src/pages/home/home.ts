import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'home',
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  slides: Array<{
    title: string,
    description: string,
    image: string
  }>

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.slides = [
      {
        title: 'Welcome to OMOSCA',
        description: 'The showcases a number of useful components that are included out of the box..',
        image: 'http://dummyimage.com/420x520/4d494d/686a82.gif&text=imagem+teste'
      },

      {
        title: 'Hey MOSCA!',
        description: 'The <b>Ionic Component Documentation</b> showcases a number of useful components.',
        image: 'http://dummyimage.com/420x520/4d494d/686a82.gif&text=imagem+teste'
      },

      {
        title: 'Bye bro',
        description: 'The <b>Ionic Component Documentation</b> showcases a number of useful components.',
        image: 'http://dummyimage.com/420x520/4d494d/686a82.gif&text=imagem+teste'
      }
    ];
  }

  goToLogin() {
    this.navCtrl.push('login');
  }
}
