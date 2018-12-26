import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { CalendarPage } from '../calendar/calendar';
import { StatisticsPage } from '../statistics/statistics';
import { TodayPage } from '../today/today';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homePage = HomePage;
  calendarPage = CalendarPage;
  statisticsPage = StatisticsPage;
  todayPage = TodayPage;

  constructor() {

  }
}
