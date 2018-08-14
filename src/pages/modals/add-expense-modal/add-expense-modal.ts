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
  public amount = '';
  public id = '';

  constructor(
    private viewCtrl: ViewController,
    private budgetService: BudgetService,
    private params: NavParams
  ) {
    let editExpense = this.params.get('expense');

    this.name = editExpense && editExpense.name ? editExpense.name : '';
    this.amount = editExpense && editExpense.amount ? editExpense.amount : '';
    this.id = editExpense && editExpense.id ? editExpense.id : '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Expense Modal');
  }

  public addExpense() {
    let expense = {
      id: this.id ? this.id : '',
      amount: +this.amount,
      date: new Date(),
      name: this.name
    } as Expense;

    this.budgetService.addExpense(expense);
    console.log('Expense sent to Budget Service!');
    this.dismiss();
  }

  public removeExpense() {
    this.budgetService.removeExpense(this.id);
    console.log('Remove Expense sent to Budget Service!', this.id);
    this.dismiss();
  }

  public dismiss() {
    this.viewCtrl.dismiss();
  }
}
