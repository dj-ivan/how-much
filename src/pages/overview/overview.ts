import { BudgetFrequency, CacheItems, Budget } from './../../models/budget-model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { CacheService } from '../../services/cache-service';
import { Expense } from '../../models/expense-model';
import { ModalController } from 'ionic-angular';
import { AddExpenseModal } from '../modals/add-expense-modal/add-expense-modal';

@IonicPage()
@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html'
})
export class OverviewPage {
  public remainingAmount: number = 0;
  public startingBudget: number = 0;
  public income: number = 0;
  public totalSpent: number = 0;
  public budgetFrequency: BudgetFrequency;
  public expenses: Expense[] = [];
  public budget: Budget;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private cache: CacheService,
    public modalCtrl: ModalController,
    private events: Events
  ) {
    this.budget = this.cache.budget;
    this.budget = this.cache.getBudgetFromCache();
    this.budgetFrequency = this.cache.budget.budgetFrequency;
    this.remainingAmount = this.cache.budget.remainingBudget;
    this.startingBudget = this.cache.budget.startingBudget;
    this.income = this.cache.budget.income;
    this.totalSpent = this.cache.budget.totalAmountSpent;
    this.expenses = this.cache.budget.expenses;

    // this.cache.storeToCache(CacheItems.BUDGET, this.cache.budget);
    //this.cache.getFromCache(CacheItems.BUDGET).then(e => {this.budget = e.object; console.log(e.object)});

    this.events.subscribe('expense:addExpense', (expense, time) => {
      this.addExpense(expense);
      console.log('Recieved new expense!')
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OverviewPage');
  }

  public showAddExpenseModal() {
    const modal = this.modalCtrl.create(AddExpenseModal);
    modal.present();
  }

  public addExpense(expense: Expense) {
    console.log('Adding new expense', expense)
    this.cache.budget.expenses.push(expense);
    this.expenses = this.cache.budget.expenses;
  }
}
