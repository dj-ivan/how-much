import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { fadeInAnimation } from '../../app/_animations/index';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HowLong } from '../how-long/how-long';
import { CacheService } from '../../services/cache-service';

@Component({
  selector: 'page-home',
  animations: [fadeInAnimation],
  templateUrl: 'how-much.html',
  host: { '[@fadeInAnimation]': '' }
})
export class HowMuch {
  public userForm: FormGroup;
  public textBoxVisible: boolean;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, private cache: CacheService) {
    this.textBoxVisible = false;
    setTimeout(() => {
      this.showTextBox();
    }, 2500);
    this.userForm = this.formBuilder.group({
      budgetAmount: ['', Validators.required]
    });
  }

  public showTextBox() {
    this.textBoxVisible = true;
  }

  public submitForm() {
    this.cache.budget.startingBudget = +this.userForm.value.budgetAmount;
    this.cache.budget.budgetStartingDate = new Date();
    this.cache.budget.budgetEndDate = new Date();
    this.cache.budget.income = 0;
    this.cache.budget.remainingBudget = +this.userForm.value.budgetAmount;
    this.cache.budget.totalAmountSpent = 0;
    this.cache.budget.expenses = [];

    this.navCtrl.push(HowLong);
  }
}
