import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profileForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){  
    this.initializeForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  private initializeForm(){
    let fullName;
    let email;
    let password;

    this.profileForm = new FormGroup({
      "fullName": new FormControl(fullName, Validators.required),
      "email": new FormControl(email, Validators.required),      
      "password": new FormControl(password, Validators.required)
    });
  }

  onSubmit() {

  }
}
