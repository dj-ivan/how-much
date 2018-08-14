import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { fadeInAnimation } from '../../app/_animations/index';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HowLong } from '../how-long/how-long';
import { BudgetService } from '../../services/budget-service';

@Component({
  selector: 'page-home',
  animations: [fadeInAnimation],
  templateUrl: 'how-much.html',
  host: { '[@fadeInAnimation]': '' }
})
export class HowMuch {
  public userForm: FormGroup;
  public textBoxVisible: boolean;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, private budget: BudgetService) {
    this.textBoxVisible = false;
    setTimeout(() => {
      this.showTextBox();
    }, 2000);
    this.userForm = this.formBuilder.group({
      budgetAmount: ['', Validators.required]
    });
  }

  public showTextBox() {
    this.textBoxVisible = true;
  }

  public submitForm() {
    this.budget.setNewStartingBudget(+this.userForm.value.budgetAmount);
    this.navCtrl.push(HowLong);
  }
}
