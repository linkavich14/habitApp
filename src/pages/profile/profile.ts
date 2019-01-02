import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Toggle } from 'ionic-angular';
import { FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { SubscriptionPage } from '../subscription/subscription';
import { ExportDataPage } from '../export-data/export-data';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  subscriptionPage = SubscriptionPage;
  exportDataPage = ExportDataPage;
  profileForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){  
    this.initializeForm();
  }

  private initializeForm(){
    let fullName: any;
    let email = firebase.auth().currentUser.email;
    let userName: any;

    this.profileForm = new FormGroup({
      "fullName": new FormControl(fullName, Validators.required),
      "email": new FormControl(email, Validators.required),      
      "userName": new FormControl(userName, Validators.required)
    });
  }

  onSubmit() {
    const value = this.profileForm.value;
    debugger;
  }

  onLoad(page: any){
    this.navCtrl.push(page);
  }

  onSyncAppleCalendar(toggle: Toggle){

  }

  onSyncGoogleCalendar(toggle: Toggle){

  }

  onSyncMicrosoftCalendar(toggle: Toggle){
    
  }
}
