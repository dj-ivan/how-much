import { Component } from '@angular/core';
import { OverviewPage } from '../overview/overview';
import { NavController, NavParams } from 'ionic-angular';
import { AboutUsPage } from '../about-us/about-us';

@Component({
    templateUrl: 'tabs.html'
})

export class TabsPage {
    tab1Root = OverviewPage;
    tab2Root = AboutUsPage;

    
    constructor (public navCtrl: NavController, public navParams: NavParams){
        
    }
}
