import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { Expense } from '../../../models/expense-model';
import { BudgetService } from '../../../services/budget-service';
@Component({
  selector: 'add-expense',
  templateUrl: 'add-expense-modal.html'
})
export class AddExpenseModal {
  public name = '';
  public amount: number;
  public id = '';

  constructor(
    private viewCtrl: ViewController,
    private budgetService: BudgetService,
    private params: NavParams
  ) {
    let editExpense = this.params.get('expense');
    if (editExpense.id !== '') {
      this.name = editExpense.name;
      this.amount = editExpense.amount;
      this.id = editExpense.id;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Expense Modal');
  }

  public addExpense() {
    let expense = {
      id: this.id ? this.id : '',
      amount: this.amount,
      date: new Date(),
      name: this.name
    } as Expense;

    this.budgetService.addExpense(expense);
    console.log('Expense sent to Budget Service!');
    this.viewCtrl.dismiss();
  }

  public dismiss() {
    this.viewCtrl.dismiss();
  }
}
