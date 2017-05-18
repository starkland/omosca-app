import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController) {
    this.slides = [
      {
        title: 'Welcome to OMOSCA',
        description: 'The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.',
        image: 'http://dummyimage.com/420x420/4d494d/686a82.gif&text=imagem+teste'
      },
      {
        title: 'Hey MOSCA!',
        description: 'The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.',
        image: 'http://dummyimage.com/420x420/4d494d/686a82.gif&text=imagem+teste'
      },
      {
        title: 'Bye bro',
        description: 'The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.',
        image: 'http://dummyimage.com/420x420/4d494d/686a82.gif&text=imagem+teste'
      }
    ];
  }

}
