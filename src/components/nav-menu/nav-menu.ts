import { Component, ViewChild } from '@angular/core';
import { ProfilePage } from '../../pages/profile/profile';
import { NotificationPage } from '../../pages/notification/notification';
import { LanguagePage } from '../../pages/language/language';
import { TutorialPage } from '../../pages/tutorial/tutorial';
import { AboutPage } from '../../pages/about/about';
import { CustomizePage } from '../../pages/customize/customize';
import { SigninPage } from '../../pages/signin/signin';
import { NavController, MenuController } from 'ionic-angular';

@Component({
  selector: 'nav-menu',
  templateUrl: 'nav-menu.html'
})
export class NavMenuComponent {
  profilePage = ProfilePage;
  notificationPage = NotificationPage;
  languagePage = LanguagePage;
  tutorialPage = TutorialPage;
  aboutPage = AboutPage;
  customizePage = CustomizePage;
  logInPage = SigninPage;

  @ViewChild('nav') nav: NavController;
  
  constructor(private menuCtrl: MenuController) {
    console.log('Hello NavMenuComponent Component');
  }

  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

}
