import { Expense } from './../models/expense-model';
import { Injectable } from '@angular/core';
import { CacheService } from './cache-service';
import { Events } from 'ionic-angular';
import { BudgetFrequency, CacheItems, Budget } from '../models/budget-model';
import { v4 as uuid } from 'uuid';
import { differenceInCalendarDays, addDays, format } from 'date-fns';

@Injectable()
export class BudgetService {
  constructor(private cache: CacheService, private events: Events) {}

  private _publishUpdatedExpenses() {
    console.log('PUBLISHED: budget:updatedExpenses');
    this.events.publish(
      'budget:updatedExpenses',
      this.cache.budget.expenses,
      Date.now()
    );
  }

  private _publishUpdatedBudget() {
    console.log('PUBLISHED: budget:updatedBudget');
    this.events.publish('budget:updatedBudget', this.cache.budget, Date.now());
  }

  public addExpense(expense: Expense) {
    if (expense.id === '') {
      expense.id = uuid();
      console.log('budgetService: Adding new expense', expense);
      this.cache.budget.expenses.push(expense);
      this._publishUpdatedExpenses();
    } else {
      this.editExpense(expense);
    }
    this._updateBudget();
  }

  public removeExpense(expenseId: string) {
    console.log('budgetService: Removing expense', expenseId);
    let oldExpenses = this.cache.budget.expenses;
    let updatedExpenses = oldExpenses.filter(e => e.id !== expenseId);
    this.cache.budget.expenses = updatedExpenses;
    this._publishUpdatedExpenses();
    this._updateBudget();
  }

  public startNewBudget() {
    console.log('budgetService: Creating New Budget');
    let budget = {
      budgetEndDate: new Date(),
      budgetFrequency: BudgetFrequency.WEEKLY,
      budgetStartingDate: new Date(),
      expenses: [],
      income: 0,
      remainingBudget: 0,
      startingBudget: 0,
      totalAmountSpent: 0,
      remainingDays: 0
    };
    this.cache.budget = budget;
    this.events.publish('budget:NewBudgetCreated', budget);
  }

  public editExpense(modifiedExpense: Expense) {
    console.log('budgetService: Editing Expense', modifiedExpense);
    let expenses = this.cache.budget.expenses;
    let updatedExpenses = expenses.map(oldExpense => {
      if (oldExpense.id === modifiedExpense.id)
        return Object.assign({}, oldExpense, modifiedExpense);
      return oldExpense;
    });

    this.cache.budget.expenses = updatedExpenses;
    this._publishUpdatedExpenses();
    this._updateBudget();
  }

  public setNewStartingBudget(startingBudget: number) {
    console.log('budgetService: Setting New Starting Budget', startingBudget);
    this.cache.budget.startingBudget = startingBudget;
    this._updateBudget();
  }

  public setBudgetFrequency(freq: BudgetFrequency) {
    console.log('budgetService: Setting New Budget Frequency', freq);
    let budget = this.cache.budget;
    budget.budgetFrequency = freq;
    budget.budgetEndDate = this._calculateBudgetEndDate(budget);
    this.cache.budget = budget;
    this._updateBudget();
  }

  public getBudget(): Budget {
    return this.cache.budget;
  }

  private _updateBudget() {
    console.log('budgetService: Updating Budget');
    let budget = this.cache.budget;
    let totalAmountSpent = this._calculateTotalSpent(budget);
    let daysLeft = this._calculateDaysLeft(budget.budgetEndDate);
    budget.remainingDays = daysLeft;
    budget.totalAmountSpent = totalAmountSpent;
    budget.remainingBudget = budget.startingBudget - totalAmountSpent;
    this.cache.storeToCache(CacheItems.BUDGET, this.cache.budget);
    console.log('budgetService: Budget Updated', budget);
    this._publishUpdatedBudget();
  }

  private _calculateBudgetEndDate(budget: Budget) {
    let endDate = addDays(budget.budgetStartingDate, budget.budgetFrequency);
    return endDate;
  }

  private _calculateDaysLeft(budgetEndDate: Date): number {
    let endDate = format(budgetEndDate, 'MM/DD/YYYY');
    let currentDate = format(new Date(), 'MM/DD/YYYY');
    return differenceInCalendarDays(endDate, currentDate);
  }

  private _calculateTotalSpent(budget: Budget): number {
    return budget.expenses.reduce((prev, cur) => {
      return prev + cur.amount;
    }, 0);
  }
}
