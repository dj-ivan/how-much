import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HowMuch } from '../how-much/how-much';
import { CacheService } from '../../services/cache-service';
import { Events } from 'ionic-angular';
import { OverviewPage } from '../overview/overview';
import { BudgetService } from '../../services/budget-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public loading = true;

  constructor(public navCtrl: NavController, public cache: CacheService, public events: Events, public budget: BudgetService) {
    this.events.subscribe('cache:BudgetCacheLoaded', (budget) => {
      if (!budget || budget == null) {
        this.loading = false;
        this.budget.startNewBudget();
      }
      else {
        this.navigateToOverview();
      }
    });

    this.cache.getBudgetFromCache();

  }

  public navigateToSetup() {
    // navigate to the new page if it is not the current page
    this.navCtrl.push(HowMuch);
  }

  public navigateToOverview() {
    // navigate to the new page if it is not the current page
    this.navCtrl.setRoot(OverviewPage);
  }

}
