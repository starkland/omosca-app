import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'favorites',
})
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  cards: Array<{
    image: string,
    title: string,
    description: string,
    id: number,
  }>

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.cards = [
      {
        id: 1,
        title: 'Mr. Taco',
        image: 'http://dummyimage.com/600x390/4d494d/686a82.gif&text=imagem+da+balada',
        description: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.',
      },

      {
        title: `Beto's Bar`,
        id: 2,
        image: 'http://dummyimage.com/600x390/4d494d/686a82.gif&text=imagem+da+balada',
        description: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.',
      },
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  openCard(cardObj) {
    console.warn(cardObj);
  }

}
