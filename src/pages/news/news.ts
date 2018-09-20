import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppPreferences} from "@ionic-native/app-preferences";

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
    public news:any;
    public appPref:string="appPref";
    public cityId:string="1";

    constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient,public appPreference:AppPreferences) {
        this.appPreference.fetch(this.appPref,"city_id").then(res=>{
            this.cityId=res;
            this.getData();
        }).catch(err=>{
            console.log("error=>",err);
        });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

    getData(){
        let url= 'http://52.172.221.235:8985/mantra/sendgrid/slimRestfulAPI/public/index.php/api/news/city/'+this.cityId;
        let data: Observable<any> = this.http.get(url);
        data.subscribe(result => {
            this.news=result;
            console.log(this.news);
        });
    }

//showModal(){
    // let new_modal = this.myModal.create(ModalPage);
    //new_modal.present();
//}
}
