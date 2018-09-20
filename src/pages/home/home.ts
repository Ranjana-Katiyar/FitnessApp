import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    cities:any;
  constructor(public navCtrl: NavController, public http:HttpClient) {
      let data: Observable<any> = this.http.get("http://52.172.221.235:8985/mantra/sendgrid/slimRestfulAPI/public/index.php/api/cities_and_clubs");
      data.subscribe(result => {
          this.cities = result;
          console.log(this.cities);
      });
  }

}
