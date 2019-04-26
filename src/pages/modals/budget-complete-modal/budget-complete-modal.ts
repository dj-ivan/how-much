import { Component } from '@angular/core';
import { ViewController, NavParams, NavController } from 'ionic-angular';
import { CacheService } from '../../../services/cache-service';
import { BudgetService } from '../../../services/budget-service';
import { HowMuch } from '../../how-much/how-much';

@Component({
  selector: 'budget-complete-modal',
  templateUrl: 'budget-complete-modal.html'
})
export class BudgetCompleteModal {
  public completionMessage: string;

  constructor(
    private viewCtrl: ViewController,
    private params: NavParams,
    public navCtrl: NavController,
    public cache: CacheService,
    public budget: BudgetService
  ) {
    this.completionMessage = this.params.get('message');
  }

  public logThis() {
    console.log("verbiage is:" + this.completionMessage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Completion Modal');
  }

  public dismiss() {
    this.viewCtrl.dismiss();
  }

  public createNewBudget() {
    this.cache.nukeData();
    this.budget.startNewBudget();
    this.navCtrl.setRoot(HowMuch);
  }
}
