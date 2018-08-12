import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { fadeInAnimation } from '../../app/_animations/index';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CacheService } from '../../services/cache-service';
import { OverviewPage } from '../overview/overview';
import { BudgetFrequency, CacheItems } from '../../models/budget-model';

@Component({
  selector: 'page-home',
  animations: [fadeInAnimation],
  templateUrl: 'how-long.html',
  host: { '[@fadeInAnimation]': '' }
})
export class HowLong {
  public userForm: FormGroup;
  public textBoxVisible: boolean;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, private cache: CacheService) {
    this.textBoxVisible = false;
    setTimeout(() => {
      this.showTextBox();
    }, 2500);
    this.userForm = this.formBuilder.group({
      // firstName: ['', Validators.required],
      // lastName: [''],
      // userName: [''],
      // email: [''],
      // password: [''],
      budgetLength: ['', Validators.required]
    });
  }

  public showTextBox() {
    this.textBoxVisible = true;
  }

  public submitForm() {
    switch (this.userForm.value.budgetLength) {
      case 'w':
      this.cache.budget.budgetFrequency = BudgetFrequency.WEEKLY;
      break;

      case 'bi':
      this.cache.budget.budgetFrequency = BudgetFrequency.BIWEEKLY;
      break;

      case 'm':
      this.cache.budget.budgetFrequency = BudgetFrequency.MONTHLY;
      break;

      default:
      break;
    }

    this.cache.storeToCache(CacheItems.BUDGET, this.cache.budget);
    this.navCtrl.push(OverviewPage);
  }
}
