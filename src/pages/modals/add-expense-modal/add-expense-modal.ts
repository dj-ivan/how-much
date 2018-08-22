import { Category } from './../../../models/expense-model';
import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { Expense } from '../../../models/expense-model';
import { BudgetService } from '../../../services/budget-service';
import { parse } from 'date-fns';
@Component({
  selector: 'add-expense',
  templateUrl: 'add-expense-modal.html'
})
export class AddExpenseModal {
  public name = '';
  public amount = '';
  public id = '';
  public categories: Category[] = this.budgetService.getCategories();
  public selectedCategory: Category = this.categories[0];
  public selectedDate ;

  constructor(
    private viewCtrl: ViewController,
    private budgetService: BudgetService,
    private params: NavParams
  ) {
    let editExpense = this.params.get('expense');
    this.name = editExpense && editExpense.name ? editExpense.name : '';
    this.amount = editExpense && editExpense.amount ? editExpense.amount : '';
    this.id = editExpense && editExpense.id ? editExpense.id : '';
    this.selectedCategory =
      editExpense && editExpense.category
        ? editExpense.category
        : null;
    // this.selectedDate =
    //   editExpense && editExpense.date ? editExpense.date : parse(new Date().toISOString()).toISOString();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Expense Modal');
  }

  public addExpense() {
    let expense = {
      id: this.id ? this.id : '',
      amount: +this.amount,
      date: new Date(),
      name: this.name,
      category: this.selectedCategory
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
