import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { IonicPage, LoadingController, AlertController, NavController, MenuController } from 'ionic-angular';
import { AuthService } from '../../services/auth';
import { SigninPage } from '../signin/signin';
import { TabsPage } from '../tabs/tabs';


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
              public navCtrl: NavController) {
  }

  onSubmit(form: NgForm) {
    const loading = this.loadingCtrl.create({
      content: 'Signing you up...'
    });
    loading.present();
    this.authService.signup(form.value.email, form.value.password)
      .then(data => {
        loading.dismiss();
        this.navCtrl.setRoot(TabsPage);
      })
      .catch(error => {
        loading.dismiss();
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

}
