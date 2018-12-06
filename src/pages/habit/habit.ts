import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Toggle, Platform, ActionSheetController } from 'ionic-angular';
import { SubtaskPage } from '../subtask/subtask';
import { Habit } from '../../models/habit';
import { HabitsService } from '../../services/habits-service';

@IonicPage()
@Component({
  selector: 'page-habit',
  templateUrl: 'habit.html',
})
export class HabitPage {
  subTaskPage = SubtaskPage;
  displayToggleLocationOptions: boolean = true;
  displayMoreDetailsOptions: boolean = true;
  displaySubTasksOptions: boolean = true; 
  displayDates: boolean = false;

  habits: Habit[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public platform: Platform,
    private habitService: HabitsService,
    public actionsheetCtrl: ActionSheetController) {
  }

  ionViewWillEnter(){
    this.habits = this.habitService.getHabits();
  }

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }

  openMenuSubTask(){
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Subtask options',
      //cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Edit',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => this.loadSubTaskPage(this.subTaskPage)
        },
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Complete',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  loadSubTaskPage(page:any){
    this.navCtrl.push(page);
  }

  onToggleLocation(toggle: Toggle) {
    this.displayToggleLocationOptions = !toggle.checked;
  }

  onToggleMoreDetails(toggle: Toggle) {
    this.displayMoreDetailsOptions = !toggle.checked;
  }

  onToggleShowSubtasks(toggle: Toggle){
    this.displaySubTasksOptions = !toggle.checked;
  }

  onToggleDates(toggle: Toggle) {
    this.displayDates = toggle.checked;
  }

}
