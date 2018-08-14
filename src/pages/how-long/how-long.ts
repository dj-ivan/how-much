import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { fadeInAnimation } from '../../app/_animations/index';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { OverviewPage } from '../overview/overview';
import { BudgetFrequency } from '../../models/budget-model';
import { BudgetService } from '../../services/budget-service';

@Component({
  selector: 'page-home',
  animations: [fadeInAnimation],
  templateUrl: 'how-long.html',
  host: { '[@fadeInAnimation]': '' }
})
export class HowLong {
  public userForm: FormGroup;
  public textBoxVisible: boolean;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, private budgetService: BudgetService) {
    this.textBoxVisible = false;
    setTimeout(() => {
      this.showTextBox();
    }, 2000);
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
