import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile';
import { NotificationPage } from '../pages/notification/notification';
import { LanguagePage } from '../pages/language/language';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { AboutPage } from '../pages/about/about';
import { CustomizePage } from '../pages/customize/customize';
import { SignupPage } from '../pages/signup/signup';
import { AuthService } from '../services/auth';
import firebase from 'firebase';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { SigninPage } from '../pages/signin/signin';
import { ApplicationService } from '../services/application-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  profilePage = ProfilePage;
  notificationPage = NotificationPage;
  languagePage = LanguagePage;
  tutorialPage = TutorialPage;
  aboutPage = AboutPage;
  customizePage = CustomizePage;
  signupPage = SignupPage;
  signinPage = SigninPage;
  tabsPage = TabsPage;

  isAuthenticated = false;
  
  @ViewChild('nav') nav: NavController;
  rootPage:any = TabsPage;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              private menuCtrl: MenuController,
              private authService: AuthService,
              public applicationService: ApplicationService) {
    
    firebase.initializeApp(FIREBASE_CONFIG);

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isAuthenticated = true;
        this.rootPage = TabsPage;
        this.applicationService.userId = user.uid;
      } else {
        this.isAuthenticated = false;
        this.rootPage = TabsPage;
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  onLogout() {
    this.authService.logout();
    this.menuCtrl.close();
    this.nav.setRoot(TabsPage);
  }
}
