import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HowMuch } from '../get-started/how-much';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public navigateToSetup() {
    // navigate to the new page if it is not the current page
    this.navCtrl.push(HowMuch);
  }

}
