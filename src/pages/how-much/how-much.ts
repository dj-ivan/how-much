import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { fadeInAnimation } from '../../app/_animations/index';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { BudgetService } from '../../services/budget-service';
import { BudgetFrequency } from '../../models/budget-model';
import { OverviewPage } from '../overview/overview';

@Component({
  selector: 'page-home',
  animations: [fadeInAnimation],
  templateUrl: 'how-much.html',
  host: { '[@fadeInAnimation]': '' }
})
export class HowMuch {
  public userForm: FormGroup;
  public textBoxVisible: boolean; 
  public submitAttempt = false;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, private budgetService: BudgetService) {
    this.textBoxVisible = false;
    setTimeout(() => {
      this.showTextBox();
    }, 2000);
    this.userForm = this.formBuilder.group({
      budgetAmount: ['', Validators.required],
      budgetLength: ['', Validators.required]
    });
  }

  public showTextBox() {
    this.textBoxVisible = true;
  }

  public submitForm() {
    this.submitAttempt = true;

    if (!this.userForm.valid) {
      return;
  }

    let strippedValue = this.userForm.value.budgetAmount.toString().replace('$','');
    this.budgetService.setNewStartingBudget(+strippedValue);
    switch (this.userForm.value.budgetLength) {
      case 'w':
      this.budgetService.setBudgetFrequency(BudgetFrequency.WEEKLY);
      break;

      case 'bi':
      this.budgetService.setBudgetFrequency(BudgetFrequency.BIWEEKLY);
      break;

      case 'm':
      this.budgetService.setBudgetFrequency(BudgetFrequency.MONTHLY);
      break;

      default:
      break;
    }
    this.navCtrl.setRoot(OverviewPage);
  }
}
