import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { IonicPage, LoadingController, AlertController, NavController, MenuController } from 'ionic-angular';
import { AuthService } from '../../services/auth';
import { SigninPage } from '../signin/signin';
import { TabsPage } from '../tabs/tabs';
import firebase from 'firebase';
import { UsersService } from '../../services/users-service';
import { User } from '../../models/user';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  tabsPage = TabsPage;
  signinPage = SigninPage;

  constructor(private authService: AuthService,
              private loadingCtrl: LoadingController,
              private menuCtrl: MenuController,
              private alertCtrl: AlertController,
              public navCtrl: NavController,
              public usersService: UsersService) {
  }

  onSubmit(form: NgForm) {
    this.authService.signup(form.value.email, form.value.password)
      .then(data => {
        this.createUserBean();
        this.navCtrl.setRoot(TabsPage);
      })
      .catch(error => {
        console.log(error.message);
        const alert = this.alertCtrl.create({
          title: 'Signup failed!',
          message: error.message,
          buttons: ['Ok']
        });
        alert.present();
      });
  }

  onLoad(page: any) {
    this.navCtrl.push(page);
    this.menuCtrl.close();
  }

  createUserBean() {
    const loading = this.loadingCtrl.create({
      content: 'Signing you up...'
    });

    loading.present();
    var user = new User;
    user.setUid(firebase.auth().currentUser.uid);
    user.setEmail(firebase.auth().currentUser.email);

    firebase.auth().currentUser.getIdToken().then(
      (token: string) => {
        this.usersService.manageUser(user, token).subscribe (
          () => {
                console.log('Success');
                loading.dismiss();
            },
          error => {
              console.log(error);
              loading.dismiss();
          }
        );
      }
    );    


    
  }

}
