import { Budget, CacheItems } from './../models/budget-model';
import { Injectable } from '@angular/core';
import { StoreService } from './store-service';
import { Events } from 'ionic-angular';

@Injectable()
export class CacheService {

  constructor(private storeService: StoreService, private events: Events) {
      this.getBudgetFromCache();
   }
  public budget: Budget;

  public getBudgetFromCache() {
      if (!this.budget) {
        this.storeService.getObject('budget').then(e => {
          if(!e) {
            this.budget = null;
          } else {
            this.budget = e.object;
          }
          this.events.publish('cache:BudgetCacheLoaded', this.budget);
          return this.budget;
        });
      } else {
        return this.budget;
      }
  }

  public storeToCache(dataTypeToCache: CacheItems, dataToCache: any) {
    switch (dataTypeToCache) {

      case CacheItems.ACCOUNT:
        this.storeService.setObject('account', dataToCache);
      break;

      case CacheItems.BUDGET:
        this.storeService.setObject('budget', dataToCache);
      break;

      case CacheItems.EXPENSES:
        this.storeService.setObject('expenses', dataToCache);
      break;
      }
  }

  public nukeData() {
    this.budget = null;
    this.storeService.clear();
  }

}
