import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {SocialSharing} from "@ionic-native/social-sharing";
import {NewsPage} from "../news/news";
import {Observable} from "rxjs";
import {ContactPage} from "../contact/contact";
import {BookingPage} from "../booking/booking";
import {MorePage} from "../more/more";
import {PlanningPage} from "../planning/planning";
import {AppPreferences} from "@ionic-native/app-preferences";

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {


    public news:any;
    public appPref:string="appPref";
    public cityId:string="1";
    message: string = 'Hello';
    subject: string = 'LifeCLub';
    file: string = 'Hello';
    link: string = 'Hello';
    constructor(public navCtrl: NavController, public navParams: NavParams,
                public http: HttpClient,public socialSharing:SocialSharing,public appPreference:AppPreferences) {
        this.appPreference.fetch(this.appPref,"city_id").then(res=>{
            this.cityId=res;
            this.getData();
        }).catch(err=>{
            console.log("error=>",err);
        });


    }


    getData(){
        let url= 'http://52.172.221.235:8985/mantra/sendgrid/slimRestfulAPI/public/index.php/api/news/city/'+this.cityId;
        let data: Observable<any> = this.http.get(url);
        data.subscribe(result => {
            this.news=result;
            console.log(this.news);
        });
    }

    onLoadNews(){
        this.navCtrl.push(NewsPage);
    }

    onLoadPlanning(){
        this.navCtrl.push(PlanningPage);
    }

    onLoadBooking(){
        this.navCtrl.push(BookingPage);
    }

    onLoadContact(){
        this.navCtrl.push(ContactPage);
    }

    onLoadInvite(){
        //this.navCtrl.push(InvitePage);

        this.socialSharing.share(this.message, this.subject, this.file, this.link).then(() => {

        }).catch(() => {

        });
    }

    onLoadMore(){
        this.navCtrl.push(MorePage);
    }



}
