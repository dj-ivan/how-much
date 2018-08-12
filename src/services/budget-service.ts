import { Expense } from './../models/expense-model';
import { Injectable } from '@angular/core';
import { CacheService } from './cache-service';
import { Events } from 'ionic-angular';

@Injectable()
export class BudgetService {
  constructor(private cache: CacheService, private events: Events) {}

  public addExpense(expense: Expense) {
    if(expense.id === '') {
      console.log('Adding new expense', expense)
      this.cache.budget.expenses.push(expense);
      // TODO: Call save method for cache
      this.events.publish('expense:addExpense', this.cache.budget.expenses, Date.now());
      return;
    }

    this.editExpense(expense)


  }

  public removeExpense() {

  }

  public editExpense(modifiedExpense: Expense) {
    let expenses = this.cache.budget.expenses;
    let updatedExpenses = expenses.filter(x => x.id === modifiedExpense.id).map(oldExpense => modifiedExpense)
    this.cache.budget.expenses = updatedExpenses;
    this.events.publish('expense:addExpense', this.cache.budget.expenses, Date.now());
  }

  private updateBudget() {
    let budget = this.cache.budget;
    this.calculateRemainingBudget(budget);
    this.calculateTotalSpent(budget);
  }

  private calculateTotalSpent(budget) {

  }

  private calculateRemainingBudget(budget) {

  }
}
