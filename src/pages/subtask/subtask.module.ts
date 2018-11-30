import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubtaskPage } from './subtask';

@NgModule({
  declarations: [
    SubtaskPage,
  ],
  imports: [
    IonicPageModule.forChild(SubtaskPage),
  ],
})
export class SubtaskPageModule {}
