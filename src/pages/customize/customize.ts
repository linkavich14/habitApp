import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-customize',
  templateUrl: 'customize.html',
})
export class CustomizePage {

  colorsOptions = ['Default', 'Dark', 'Blue', 'Green'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomizePage');
  }

}
