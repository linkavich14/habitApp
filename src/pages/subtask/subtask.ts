import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Toggle } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-subtask',
  templateUrl: 'subtask.html',
})
export class SubtaskPage {
  //Toggles display
  displayToggleExercise: boolean = false;
  displayToggleLearning: boolean = false;
  displayToggleLocation: boolean = false;
  displayToggleMoney: boolean = false;
  displayToggleBadHabit: boolean = false;
  displayDates: boolean = false;

  //Toggles display options
  displayToggleMoneyOptions: boolean = true;
  displayToggleLocationOptions: boolean = true;
  displayToggleExerciseOption: boolean = true;
  displayToggleLearningOptions: boolean = true;
  displayToggleBadHabitOptions: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubtaskPage');
  }

  onToggleMoney(toggle: Toggle){
    this.displayToggleMoneyOptions = !toggle.checked;
    this.displayToggleExercise = toggle.checked;
    this.displayToggleBadHabit = toggle.checked;
  }

  onToggleLocation(toggle: Toggle) {
    this.displayToggleLocationOptions = !toggle.checked;
  }

  onToggleLearning(toggle: Toggle) {
    this.displayToggleLearningOptions = !toggle.checked;
  }

  onToggleExercise(toggle: Toggle) {
    this.displayToggleExerciseOption = !toggle.checked;
  }

  onToggleBadHabit(toggle: Toggle) {
    this.displayToggleBadHabitOptions = !toggle.checked;
  }

  onToggleDates(toggle: Toggle) {
    this.displayDates = toggle.checked;
  }

}
