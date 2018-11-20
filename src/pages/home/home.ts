import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public status: boolean;

  constructor(public navCtrl: NavController) {

  }

  show() {
    debugger;
    this.status = false;
  }

  hide() {
    this.status = true;
  }

}
