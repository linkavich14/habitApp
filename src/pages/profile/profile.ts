import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Toggle, AlertController } from 'ionic-angular';
import { FormGroup, NgForm } from '@angular/forms';
import { SubscriptionPage } from '../subscription/subscription';
import { ExportDataPage } from '../export-data/export-data';
import { TabsPage } from '../tabs/tabs';
import firebase from 'firebase';
import { UsersService } from '../../services/users-service';
import { ToastController } from "ionic-angular";
import { User } from '../../models/user';
import { NGXLogger } from 'ngx-logger';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  subscriptionPage = SubscriptionPage;
  exportDataPage = ExportDataPage;
  profileForm: FormGroup;
  userData: any;
  fullName: String;
  userName: String;
  email: String;

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams, 
      public usersService: UsersService,
      private alertCtrl: AlertController,
      public toastCtrl: ToastController,
      private logger: NGXLogger) {
  }

  ngOnInit() {
    if(this.userData){
      this.initializeForm();
    }else {
      firebase.auth().currentUser.getIdToken().then(
        (token: string) => {
          this.usersService.getUser(token).subscribe (
            (data) => {
              this.userData = JSON.parse(data);
              this.initializeForm();
              console.log('Loaded User data');              
            },
            error => {
                console.log(error.message);
                this.logger.error(error.message, 'error in ngOnInit profile');
                const alert = this.alertCtrl.create({
                  title: 'Error getting user data!',
                  message: error.message,
                  buttons: ['Ok']
                });
                alert.present();
            }
          );
        }
      ); 
    }

  }

  private initializeForm(){
    if(!this.userData._fullName) {
      this.userData._fullName = "";
    } 

    if(!this.userData._userName) {
      this.userData._userName = "";
    }

    if(!this.userData._email) {
      this.userData._email = firebase.auth().currentUser.email;
    }

    this.fullName = this.userData._fullName;
    this.userName = this.userData._userName;
    this.email = this.userData._email;
  }

  onSubmit(form: NgForm) {
    const value = this.profileForm.value;
    var user = new User;
    user.setUid(firebase.auth().currentUser.uid);
    user.setEmail(value.email);
    user.setName(value.fullName);
    user.setUserName(value.userName);

    firebase.auth().currentUser.getIdToken().then(
      (token: string) => {
        this.usersService.manageUser(user, token).subscribe (
          () => {
            this.navCtrl.setRoot(TabsPage);
            this.showToast('top');
            console.log('Success');
          },
          error => {
              console.log(error.message);
              this.logger.error(error.message, 'error in onSubmit profile');
              const alert = this.alertCtrl.create({
                title: 'Profile update failed!',
                message: error.message,
                buttons: ['Ok']
              });
              alert.present();
          }
        );
      }
    );  
  }

  showToast(position:string) {
    let toast = this.toastCtrl.create({
        message: 'Profile updated successfully',
        duration: 2000,
        position: position
    });
    toast.present(toast);
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
