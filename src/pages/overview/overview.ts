import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CacheService } from '../../services/cache-service';

@IonicPage()
@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html',
})
export class OverviewPage {

  public remainingAmount: number = 0;
  public startingBudget: number = 0;
  public budgetLength: string = '';


  constructor(public navCtrl: NavController, public navParams: NavParams, private cache: CacheService) {
    this.budgetLength = this.cache.budget.BudgetDuration;
    this.remainingAmount = this.cache.budget.RemainingBudget;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OverviewPage');
  }

}
