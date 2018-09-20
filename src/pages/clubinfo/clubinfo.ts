import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RegistrationPage} from "../registration/registration";
import {DashboardPage} from "../dashboard/dashboard";
import {AppPreferences} from "@ionic-native/app-preferences";

/**
 * Generated class for the ClubinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clubinfo',
  templateUrl: 'clubinfo.html',
})
export class ClubinfoPage {

    public appPref:string="appPref";

    public pepperoni:boolean = true;
    public hide:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,public appPreference:AppPreferences) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClubinfoPage');
  }

    change() {
        if(this.pepperoni){
            this.hide = false;
        }else{
            this.hide = true;
        }

        console.log('this.pepperoni'+ this.pepperoni);

    }

    onLoadDashboard(){
        this.navCtrl.setRoot(DashboardPage);
        this.appPreference.store(this.appPref,"login",true);
    }

    onLoadRegister(){
        this.navCtrl.push(RegistrationPage);
    }

}
