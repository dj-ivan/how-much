import { Budget } from './../models/budget-model';
import { Injectable } from '@angular/core';

@Injectable()
export class CacheService {

  public budget: Budget = {
    income: 2000,
    budgetDuration: 'Weekly',
    remainingBudget: 1657.23,
    startingBudget: 2000,
    totalExpenses: 342.77
  }

  // Seeding the db
  constructor() { }
}
