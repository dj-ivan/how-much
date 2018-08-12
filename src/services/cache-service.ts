import { Budget } from './../models/budget-model';
import { Injectable } from '@angular/core';
import { Expense } from '../models/expense-model';

@Injectable()
export class CacheService {

  public budget: Budget = {
    income: 2000,
    budgetDuration: 'Weekly',
    remainingBudget: 1657.23,
    startingBudget: 2000,
    totalExpenses: 342.77,
    expenses: [
      {
        name: 'Mcdonalds',
        amount: 65.25,
        date: new Date()
      } as Expense
    ]
  }

  // Seeding the db
  constructor() { }
}
