import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CalendarPage } from '../pages/calendar/calendar';
import { HabitsService } from '../services/habits-service';
import { SubTaskService } from '../services/subtasks-service';
import { UsersService } from '../services/users-service';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { HabitPage } from '../pages/habit/habit';
import { StatisticsPage } from '../pages/statistics/statistics';
import { ProfilePage } from '../pages/profile/profile';
import { SubtaskPage } from '../pages/subtask/subtask';
import { LanguagePage } from '../pages/language/language';
import { NotificationPage } from '../pages/notification/notification';
import { TutorialPage } from '../pages/tutorial/tutorial';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    CalendarPage,
    TabsPage,
    SigninPage,
    SignupPage,
    HabitPage,
    StatisticsPage,
    ProfilePage,
    SubtaskPage,
    LanguagePage,
    NotificationPage, 
    TutorialPage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    CalendarPage,
    TabsPage,
    SigninPage,
    SignupPage,
    HabitPage,
    StatisticsPage,
    ProfilePage,
    SubtaskPage,
    LanguagePage,
    NotificationPage,
    TutorialPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HabitsService,
    SubTaskService,
    UsersService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
