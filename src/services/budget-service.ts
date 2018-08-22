import { Expense, Category } from './../models/expense-model';
import { Injectable } from '@angular/core';
import { CacheService } from './cache-service';
import { Events } from 'ionic-angular';
import { BudgetFrequency, CacheItems, Budget } from '../models/budget-model';
import { v4 as uuid } from 'uuid';
import { differenceInCalendarDays, addDays, format } from 'date-fns';

@Injectable()
export class BudgetService {
  constructor(private cache: CacheService, private events: Events) {}

  public getCategories(): Category[] {
    return [
      {
        name: 'Fast Food',
        categoryId: 1
      } as Category,
      {
        name: 'Restaurants',
        categoryId: 2
      } as Category,
      {
        name: 'Shopping',
        categoryId: 3
      } as Category,
      {
        name: 'Transportation',
        categoryId: 4
      } as Category,
      {
        name: 'Entertainment',
        categoryId: 5
      } as Category,
      {
        name: 'Personal Care',
        categoryId: 6
      } as Category,
      {
        name: 'Groceries',
        categoryId: 7
      } as Category,
      {
        name: 'Utilities',
        categoryId: 8
      } as Category,
      {
        name: 'Household Items',
        categoryId: 9
      } as Category
    ];
  }

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
    this._updateBudget();
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
