import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, ModalController } from 'ionic-angular';

import * as moment from 'moment';


@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();

  calendar = {
    mode: 'month',
    locale: 'en-GB',
    currentDate: new Date(),
    formatMonth: 'MMMM yyyy',
    formatDay: 'EE'
  };

  constructor(public navCtrl: NavController, private modalCtrl: ModalController, private alertCtrl: AlertController) { }
 
  addEvent() {
    let modal = this.modalCtrl.create('EventModalPage', {selectedDay: this.selectedDay});
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {
        let eventData = data;
 
        eventData.startTime = new Date(data.startTime);
        eventData.endTime = new Date(data.endTime);
 
        let events = this.eventSource;
        events.push(eventData);
        this.eventSource = [];
        setTimeout(() => {
          this.eventSource = events;
        });
      }
    });
  }
 
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
 
  onEventSelected(event) {
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');
    
    let alert = this.alertCtrl.create({
      title: '' + event.title,
      subTitle: 'From: ' + start + '<br>To: ' + end,
      buttons: ['OK']
    })
    alert.present();
  }
 
  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
  }

  onCurrentDateChanged(event) {
    console.log(event);
  }  

  /*

  <ion-header>
  <ion-navbar color="primary">
    <ion-buttons start>
      <button ion-button icon-only (click)="cancel()">
        <ion-icon name="close"></ion-icon>
      </button>
    </ion-buttons>
    <ion-title>Event Details</ion-title>
  </ion-navbar>
</ion-header>
 
<ion-content>
  <ion-list>
    <ion-item>
      <ion-input type="text" placeholder="Title" [(ngModel)]="event.title"></ion-input>
    </ion-item>
 
    <ion-item>
      <ion-label>Start</ion-label>
      <ion-datetime displayFormat="MM/DD/YYYY HH:mm" pickerFormat="MMM D:HH:mm" [(ngModel)]="event.startTime" [min]="minDate"></ion-datetime>
    </ion-item>
 
    <ion-item>
      <ion-label>End</ion-label>
      <ion-datetime displayFormat="MM/DD/YYYY HH:mm" pickerFormat="MMM D:HH:mm" [(ngModel)]="event.endTime" [min]="minDate"></ion-datetime>
    </ion-item>
 
    <ion-item>
      <ion-label>All Day?</ion-label>
      <ion-checkbox [(ngModel)]="event.allDay"></ion-checkbox>
    </ion-item>
  </ion-list>
 
  <button ion-button full icon-left (click)="save()">
    <ion-icon name="checkmark"></ion-icon> Add Event
  </button>
</ion-content>


import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as moment from 'moment';
 
@IonicPage()
@Component({
  selector: 'page-event-modal',
  templateUrl: 'event-modal.html',
})
export class EventModalPage {
 
  event = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), allDay: false };
  minDate = new Date().toISOString();
 
  constructor(public navCtrl: NavController, private navParams: NavParams, public viewCtrl: ViewController) {
    let preselectedDate = moment(this.navParams.get('selectedDay')).format();
    this.event.startTime = preselectedDate;
    this.event.endTime = preselectedDate;
  }
 
  cancel() {
    this.viewCtrl.dismiss();
  }
 
  save() {
    this.viewCtrl.dismiss(this.event);
  }
 
}



  */
 

}
