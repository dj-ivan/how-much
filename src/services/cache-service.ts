import { Budget } from './../models/budget-model';
import { Injectable } from '@angular/core';

@Injectable()
export class CacheService {

  public budget: Budget = {
    Income: 2000,
    BudgetDuration: 'Weekly',
    RemainingBudget: 1657.23,
    StartingBudget: 2000,
    TotalExpenses: 342.77
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
