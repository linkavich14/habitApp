import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MyApp } from './app.component';

//Services
import { HabitsService } from '../services/habits-service';
import { SubTaskService } from '../services/subtasks-service';
import { UsersService } from '../services/users-service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Pages
import { CalendarPage } from '../pages/calendar/calendar';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { HabitPage } from '../pages/habit/habit';
import { StatisticsPage } from '../pages/statistics/statistics';
import { ProfilePage } from '../pages/profile/profile';
import { SubtaskPage } from '../pages/subtask/subtask';
import { LanguagePage } from '../pages/language/language';
import { NotificationPage } from '../pages/notification/notification';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { TodayPage } from '../pages/today/today';
import { CustomizePage } from '../pages/customize/customize';

//Modules
import { NgCalendarModule  } from 'ionic2-calendar';
import { ComponentsModule } from '../components/components.module';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { SQLite } from '@ionic-native/sqlite';
import { AuthService } from '../services/auth';
import { SubscriptionPage } from '../pages/subscription/subscription';
import { ExportDataPage } from '../pages/export-data/export-data';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    AboutPage,
    CustomizePage,
    TodayPage,
    SubscriptionPage,
    ExportDataPage
  ],
  imports: [
    NgCalendarModule,
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
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
    AboutPage,
    CustomizePage,
    TodayPage,
    SubscriptionPage,
    ExportDataPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HabitsService,
    SubTaskService,
    UsersService,
    SQLite,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
