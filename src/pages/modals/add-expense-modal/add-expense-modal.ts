import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { Expense } from '../../../models/expense-model';
@Component({
  selector: 'add-expense',
  templateUrl: 'add-expense-modal.html'
})
export class AddExpenseModal {
  public name = '';
  public amount:number;

  constructor(private viewCtrl: ViewController, private events: Events) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad OverviewPage');
  }

  public addNewExpense() {
    let expense = {
      amount: this.amount,
      date: new Date(),
      name: this.name
    } as Expense;
    console.log('Expense sent to Overview Component!');
    this.events.publish('expense:addExpense', expense, Date.now());
    this.viewCtrl.dismiss();
  }

  public dismiss() {
    this.viewCtrl.dismiss();
  }
}
