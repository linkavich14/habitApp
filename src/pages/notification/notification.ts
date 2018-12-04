import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Toggle } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {

  displayNotifications: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
  }

  onDisableAllNotifications(toggle: Toggle){
    this.displayNotifications = toggle.checked;
  }

  onDisableSoundNotifications(toggle: Toggle){

  }

  onDisableBannerNotifications(toggle: Toggle){

  }

}
