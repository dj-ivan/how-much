import { Expense } from './../models/expense-model';
import { Injectable } from '@angular/core';
import { CacheService } from './cache-service';
import { Events } from 'ionic-angular';
import { BudgetFrequency, CacheItems } from '../models/budget-model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BudgetService {
  constructor(private cache: CacheService, private events: Events) {}

  public addExpense(expense: Expense) {
    if (expense.id === '') {
      expense.id = uuid();
      console.log('Adding new expense', expense);
      this.cache.budget.expenses.push(expense);
      // TODO: Call save method for cache
      this.events.publish(
        'expense:addExpense',
        this.cache.budget.expenses,
        Date.now()
      );
      this.cache.storeToCache(CacheItems.BUDGET, this.cache.budget);
    } else {
      this.editExpense(expense);
    }
  }

  public removeExpense() {}

  public startNewBudget() {
    let budget = {
      budgetEndDate: new Date(),
      budgetFrequency: BudgetFrequency.WEEKLY,
      budgetStartingDate: new Date(),
      expenses: [],
      income: 0,
      remainingBudget: 0,
      startingBudget: 0,
      totalAmountSpent: 0
    };
    this.cache.budget = budget;
  }

  public editExpense(modifiedExpense: Expense) {
    let expenses = this.cache.budget.expenses;
    let updatedExpenses = expenses
      .map(oldExpense => {
        if(oldExpense.id === modifiedExpense.id)
          return Object.assign({}, oldExpense, modifiedExpense);
        return oldExpense;
      });

    this.cache.budget.expenses = updatedExpenses;
    this.events.publish(
      'expense:addExpense',
      this.cache.budget.expenses,
      Date.now()
    );
    this.cache.storeToCache(CacheItems.BUDGET, this.cache.budget);
  }

  private updateBudget() {
    let budget = this.cache.budget;
    this.calculateRemainingBudget(budget);
    this.calculateTotalSpent(budget);
  }

  private calculateTotalSpent(budget) {}

  private calculateRemainingBudget(budget) {}
}
