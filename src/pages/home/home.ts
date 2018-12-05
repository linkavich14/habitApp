import { Component } from '@angular/core';
import { NavController, ActionSheetController, Platform } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { HabitPage } from '../habit/habit';
import { SubtaskPage } from '../subtask/subtask';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  habitPage =  HabitPage;
  subTaskPage = SubtaskPage;
  rootPage:any = TabsPage;
  status: boolean = true;
  subTaskBtnText: string = "Show subtasks";

  constructor(
      public navCtrl: NavController, 
      public platform: Platform,
      public actionsheetCtrl: ActionSheetController) {

  }

  toggleDisplay(status){
    this.status = !status;
    if(status){
      this.subTaskBtnText = "Hide subtasks";
    }else{
      this.subTaskBtnText = "Show subtasks";
    }
  }  

  onLoad(page: any) {
    this.navCtrl.push(page);
  }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Subtask options',
      //cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Edit',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => this.onLoad(this.subTaskPage)
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

}
