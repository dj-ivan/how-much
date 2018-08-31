import { BudgetService } from './../../services/budget-service';
import { BudgetFrequency, Budget } from './../../models/budget-model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Expense } from '../../models/expense-model';
import { ModalController } from 'ionic-angular';
import { AddExpenseModal } from '../modals/add-expense-modal/add-expense-modal';
import { compareDesc, format } from 'date-fns';

@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html'
})
export class OverviewPage {
  public remainingAmount: number = 0;
  public startingBudget: number = 0;
  public daysLeft: number = 0;
  public totalSpent: number = 0;
  public budgetFrequency: BudgetFrequency;
  public expenses: Expense[] = [];
  public budget: Budget;
  public budgetStatus = BudgetStatus.GOOD;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _budgetService: BudgetService,
    public modalCtrl: ModalController,
    private events: Events
  ) {
    this.buildBudgetDashboard();

    this.events.subscribe('budget:updatedBudget', (budget: Budget) => {
      this.buildBudgetDashboard(budget);
      console.log('Recieved new expenses!');
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OverviewPage');
  }

  public buildBudgetDashboard(budget?: Budget) {
    this.budget =
      budget !== undefined ? budget : this._budgetService.getBudget();

    this.budgetFrequency = this.budget.budgetFrequency;
    this.remainingAmount = this.budget.remainingBudget;
    this.startingBudget = this.budget.startingBudget;
    this.daysLeft = this.budget.remainingDays;
    this.totalSpent = this.budget.totalAmountSpent;
    this.sortExpensesDesc();
    this.updateBudgetStatus();
  }

  public showExpenseModal(expense: Expense) {
    const modal = expense
      ? this.modalCtrl.create(AddExpenseModal, { expense })
      : this.modalCtrl.create(AddExpenseModal);
    modal.present();
  }

  public sortExpensesDesc() {
    let sortedExpenses = this.budget.expenses.sort((x, y) => {
      return compareDesc(x.date, y.date);
    });
    sortedExpenses.forEach(e => e.date = new Date(e.date));
    this.expenses = sortedExpenses;
  }

  public firstDateIsOlder(firstDate: Date, secondDate: Date) {
    let first = format(firstDate, 'MM/DD/YYYY');
    let second = format(secondDate, 'MM/DD/YYYY');
    return compareDesc(first, second);
  }

  public updateBudgetStatus() {
    let cautionRange = this.startingBudget * 0.35;
    let dangerRange = this.startingBudget * 0.15;
    if (this.remainingAmount > cautionRange) {
      this.budgetStatus = BudgetStatus.GOOD;
    } else if (
      this.remainingAmount > dangerRange &&
      this.remainingAmount <= cautionRange
    ) {
      this.budgetStatus = BudgetStatus.CAUTION;
    } else {
      this.budgetStatus = BudgetStatus.DANGER;
    }
    console.log('OverviewComponent: Updated budget status', this.budgetStatus, cautionRange, dangerRange);
  }
}

export enum BudgetStatus {
  GOOD = 'good-status',
  CAUTION = 'caution-status',
  DANGER = 'danger-status'
}
