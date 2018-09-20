import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ClubinfoPage} from "../pages/clubinfo/clubinfo";
import {DashboardPage} from "../pages/dashboard/dashboard";
import {NewsPage} from "../pages/news/news";
import {AccordionComponent} from "../components/accordion/accordion";
import {PlanningPage} from "../pages/planning/planning";
import {ContactPage} from "../pages/contact/contact";
import {BookingPage} from "../pages/booking/booking";
import {InvitePage} from "../pages/invite/invite";
import {MorePage} from "../pages/more/more";
import {AboutPage} from "../pages/about/about";
import {RegistrationPage} from "../pages/registration/registration";
import {PolicyPage} from "../pages/policy/policy";
import {SettingsPage} from "../pages/settings/settings";
import {HttpClientModule} from "@angular/common/http";
import {IonicImageViewerModule} from "ionic-img-viewer";
import {SocialSharing} from "@ionic-native/social-sharing";
import {AppPreferences} from "@ionic-native/app-preferences";
import {CallNumber} from "@ionic-native/call-number";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
      ClubinfoPage,
      DashboardPage,
      NewsPage,
      AccordionComponent,
      PlanningPage,
      ContactPage,
      BookingPage,
      InvitePage,
      MorePage,
      AboutPage,
      RegistrationPage,
      PolicyPage,
      SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicImageViewerModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
      ClubinfoPage,
      DashboardPage,
      NewsPage,
      PlanningPage,
      ContactPage,
      BookingPage,
      InvitePage,
      AccordionComponent,
      MorePage,
      AboutPage,
      RegistrationPage,
      PolicyPage,
      SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
      SocialSharing,
      AppPreferences,
      CallNumber
  ]
})
export class AppModule {}
