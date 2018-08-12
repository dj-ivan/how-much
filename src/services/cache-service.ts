import { Budget, BudgetFrequency } from './../models/budget-model';
import { Injectable } from '@angular/core';
import { Expense } from '../models/expense-model';

@Injectable()
export class CacheService {

  public budget: Budget = {
    income: 2000,
    budgetFrequency: BudgetFrequency.BIWEEKLY,
    remainingBudget: 1657.23,
    startingBudget: 2000,
    totalAmountSpent: 342.77,
    expenses: [
      {
        id: '23463452',
        name: 'Mcdonalds',
        amount: 65.25,
        date: new Date()
      } as Expense
    ],
    budgetEndDate: new Date(),
    budgetStartingDate: new Date()
  }

  // Seeding the db
  constructor() { }

  public getFromCache = (dataToGet) => {
    //get from local cache
  }

  public storeToCache = (dataToCache) => {
    //store to local cache
  }

}
