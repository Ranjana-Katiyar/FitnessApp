import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClubinfoPage } from './clubinfo';

@NgModule({
  declarations: [
    ClubinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ClubinfoPage),
  ],
})
export class ClubinfoPageModule {}
