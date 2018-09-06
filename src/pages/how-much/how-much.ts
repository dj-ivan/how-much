import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { fadeInAnimation } from '../../app/_animations/index';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { BudgetService } from '../../services/budget-service';
import { TabsPage } from '../tabs/tabs';

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
  public showCustomDaysInput = false;

  constructor(
    public navCtrl: NavController,
    private formBuilder: FormBuilder,
    private budgetService: BudgetService
  ) {
    this.userForm = this.formBuilder.group({
      budgetAmount: ['', Validators.required],
      budgetLength: ['', Validators.required]
    });
  }

  public submitForm() {
    this.submitAttempt = true;

    if (!this.userForm.valid) {
      return;
    }

    let strippedValue = this.userForm.value.budgetAmount.toString().replace('$','');
    strippedValue = strippedValue.replace(/,/g,'');
    this.budgetService.setNewStartingBudget(+strippedValue);
    this.budgetService.setBudgetFrequency(+this.userForm.value.budgetLength);

    this.navCtrl.setRoot(TabsPage);
  }

}
