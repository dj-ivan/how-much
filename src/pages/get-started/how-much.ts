import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { fadeInAnimation } from '../../app/_animations/index';

@Component({
  selector: 'page-home',
  animations: [fadeInAnimation],
  templateUrl: 'how-much.html',
  host: { '[@fadeInAnimation]': '' }
})
export class HowMuch {
  public textBoxVisible: boolean;

  constructor(public navCtrl: NavController) {
    this.textBoxVisible = false;
    setTimeout(() => {
      this.showTextBox();
    }, 2500);
  }

  public showTextBox() {
    // navigate to the new page if it is not the current page
    //this.navCtrl.push(SetupUserPage);
    this.textBoxVisible = true;
  }

}
