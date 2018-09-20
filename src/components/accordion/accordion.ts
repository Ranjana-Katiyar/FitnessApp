import {Component, Input, OnInit, Renderer, ViewChild} from '@angular/core';
import {NavController} from "ionic-angular";
import {ClubinfoPage} from "../../pages/clubinfo/clubinfo";
import {AppPreferences} from "@ionic-native/app-preferences";

/**
 * Generated class for the AccordionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'accordion',
  templateUrl: 'accordion.html'
})
export class AccordionComponent implements OnInit{

    appPref:string="appPref";
    cityId:number;
    clubId:number;
    accordionExpanded = false;
    @ViewChild("cc") cardContent: any;
    @Input('city') city;

    constructor(public navCtrl: NavController, public renderer:Renderer,public appPreferences:AppPreferences) {
    }

    ngOnInit(){
        console.log(this.cardContent.nativeElement);
        this.renderer.setElementStyle(this.cardContent.nativeElement,"webkitTransition","max-height 500ms, padding 500ms")
    }

    toggleAccordion(){
        if(this.accordionExpanded){
            this.renderer.setElementStyle(this.cardContent.nativeElement,"max-height","0px");
            this.renderer.setElementStyle(this.cardContent.nativeElement,"padding","0px 16px");

        } else {
            this.renderer.setElementStyle(this.cardContent.nativeElement,"max-height","500px");
            this.renderer.setElementStyle(this.cardContent.nativeElement,"padding","13px 16px");

        }

        this.accordionExpanded=!this.accordionExpanded;

    }
    onLoadClub(cityId,clubId){
        console.log(cityId+"   "+clubId);
        this.appPreferences.store(this.appPref,"city_id",cityId);
        this.appPreferences.store(this.appPref,"club_id",clubId);
        this.navCtrl.push(ClubinfoPage);

    }

}
