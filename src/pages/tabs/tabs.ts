import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { CalendarPage } from '../calendar/calendar';
import { StatisticsPage } from '../statistics/statistics';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CalendarPage;
  tab3Root = StatisticsPage;

  constructor() {

  }
}
