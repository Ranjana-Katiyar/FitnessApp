import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Observable} from "rxjs";
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {AppPreferences} from "@ionic-native/app-preferences";
import {CallNumber} from "@ionic-native/call-number";

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

    public items:any;
    public cNumber:string;
    public appPref:string="appPref";

    public cityId:string="1";
    constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient,public appPreference:AppPreferences,public callNumber: CallNumber) {
        this.appPreference.fetch(this.appPref,"city_id").then(res=>{
           this.cityId=res;
           this.getData();
        }).catch(err=>{
            console.log("error=>",err);
        });

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

    getData(){

        let url= 'http://52.172.221.235:8985/mantra/sendgrid/slimRestfulAPI/public/index.php/api/clubs/city/'+this.cityId;
        let datae: Observable<any> = this.http.get(url);
        datae.subscribe(result => {
            this.items=result;
            console.log(this.items);
        });
    }

    onContact(form:NgForm){
        console.log(form.value);
    }

    onCallUs(phone){
        this.cNumber=phone;
        this.callNumber.callNumber(this.cNumber, true)
            .catch(err => console.log('Error launching dialer', err));
    }
}
