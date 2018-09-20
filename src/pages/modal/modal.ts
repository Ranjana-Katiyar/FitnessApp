import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

    public title: string;
    public content: string;

    constructor(public navCtrl: NavController, public navParams: NavParams,public view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }
    ionViewWillLoad() {
        this.title = this.navParams.get('news_title');
        this.content = this.navParams.get('news_content');
        console.log(this.title);
        console.log(this.content);
    }

    closeModal(){
        this.view.dismiss();
    }

}
