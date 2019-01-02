import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExportDataPage } from './export-data';

@NgModule({
  declarations: [
    ExportDataPage,
  ],
  imports: [
    IonicPageModule.forChild(ExportDataPage),
  ],
})
export class ExportDataPageModule {}
