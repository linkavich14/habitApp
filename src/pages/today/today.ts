import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Habit } from '../../models/habit-bean';
import { HabitsService } from '../../services/habits-service';

@IonicPage()
@Component({
  selector: 'page-today',
  templateUrl: 'today.html',
})
export class TodayPage {

  habits: Habit[];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private habitService: HabitsService,) {
  }

  ionViewWillEnter(){

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodayPage');
  }

  reorderItems(indexes){
    
  }

}
