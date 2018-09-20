import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SettingsPage} from "../settings/settings";
import {PolicyPage} from "../policy/policy";
import {AboutPage} from "../about/about";
import {HomePage} from "../home/home";
import {AppPreferences} from "@ionic-native/app-preferences";

/**
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

    public appPref:string="appPref";

    constructor(public navCtrl: NavController, public navParams: NavParams,public appPreference:AppPreferences) {
  }


    onLoadAbout(){
        this.navCtrl.push(AboutPage);
    }

    onLogOut(){
        this.appPreference.store(this.appPref,"login",false);
        this.navCtrl.setRoot(HomePage);
  }
    onLoadPolicy(){
        this.navCtrl.push(PolicyPage);
    }

    onLoadSettings(){
        this.navCtrl.push(SettingsPage);
    }

}
