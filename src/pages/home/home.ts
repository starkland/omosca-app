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
        title: 'Hello, Mosconauta!',
        description: 'Muito bem vindos ao mais novo app de entretenimento da web.',
        image: 'http://dummyimage.com/420x520/4d494d/686a82.gif&text=imagem+teste'
      },

      {
        title: 'SE LIGA.',
        description: 'Aqui você encontra todas as informações sobre os eventos da sua região.',
        image: 'http://dummyimage.com/420x520/4d494d/686a82.gif&text=imagem+teste'
      },

      {
        title: 'Fique por dentro!',
        description: 'Siga nossas redes sociais e fique por dentro de todas as novidades.',
        image: 'http://dummyimage.com/420x520/4d494d/686a82.gif&text=imagem+teste'
      }
    ];
  }

  goToLogin() {
    this.navCtrl.push('login');
  }
}
