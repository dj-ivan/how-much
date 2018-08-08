import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CacheService } from '../../../services/cache-service';

@Component({
  selector: 'add-expense',
  templateUrl: 'add-expense-modal.html',
})
export class AddExpenseModal {

  public remainingAmount: number = 0;
  public startingBudget: number = 0;
  public income: number = 0;
  public totalSpent: number = 0;
  public budgetLength: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private cache: CacheService) {
    this.budgetLength = this.cache.budget.budgetDuration;
    this.remainingAmount = this.cache.budget.remainingBudget;
    this.startingBudget = this.cache.budget.startingBudget;
    this.income = this.cache.budget.income;
    this.totalSpent = this.cache.budget.totalExpenses;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OverviewPage');
  }

  public addExpense() {

  }

}
