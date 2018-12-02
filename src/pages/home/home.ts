import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { HabitPage } from '../habit/habit';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  habitPage =   HabitPage;
  rootPage:any = TabsPage;
  status: boolean = true;

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }

  toggleDisplay(status){
    this.status = !status;
  }  

  onLoad(page: any) {
    this.navCtrl.push(page);
  }

}
