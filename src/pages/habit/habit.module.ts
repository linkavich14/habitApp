import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HabitPage } from './habit';

@NgModule({
  declarations: [
    HabitPage,
  ],
  imports: [
    IonicPageModule.forChild(HabitPage),
  ],
})
export class HabitPageModule {}
