import { Category } from './../../../models/expense-model';
import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { Expense } from '../../../models/expense-model';
import { BudgetService } from '../../../services/budget-service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
// import { parse } from 'date-fns';

@Component({
  selector: 'add-expense',
  templateUrl: 'add-expense-modal.html'
})
export class AddExpenseModal {
  public id = '';
  public categories: Category[] = this.budgetService.getCategories();
  public selectedDate;
  public selectedCategory: Category = null;
  public expenseForm: FormGroup;
  public submitAttempt = false;

  constructor(
    private viewCtrl: ViewController,
    private budgetService: BudgetService,
    private params: NavParams,
    private formBuilder: FormBuilder
  ) {
    let editExpense = this.params.get('expense');
    this.expenseForm = this.formBuilder.group({
      expenseName: ['', Validators.required],
      expenseCategory: [0, Validators.required],
      expenseAmount: ['', Validators.required]
    });

    this.selectedCategory =
      editExpense && editExpense.category ? editExpense.category : null;
    this.id = editExpense && editExpense.id ? editExpense.id : '';

    this.expenseForm.setValue({
      expenseName: editExpense && editExpense.name ? editExpense.name : '',
      expenseAmount:
        editExpense && editExpense.amount
          ? editExpense.amount.toFixed(2).toString()
          : '',
      expenseCategory:
        editExpense && editExpense.category
          ? +editExpense.category.categoryId
          : null
    });

    // this.selectedDate =
    //   editExpense && editExpense.date ? editExpense.date : parse(new Date().toISOString()).toISOString();

    this.categories = this.categories.sort(function(a, b) {
      return a.name.localeCompare(b.name);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Expense Modal');
  }

  public addExpense() {
    this.submitAttempt = true;

    if (!this.expenseForm.valid) {
      return;
    }
    let strippedDollarSign = this.expenseForm.value.expenseAmount
      .toString()
      .replace('$', '');
    let strippedValue = strippedDollarSign.replace(/,/g, '');

    let selectedCategories = this.categories.filter(
      x => x.categoryId === this.expenseForm.value.expenseCategory
    );

    let expense = {
      id: this.id ? this.id : '',
      amount: +strippedValue,
      date: new Date(),
      name: this.expenseForm.value.expenseName,
      category: selectedCategories.length > 0 ? selectedCategories[0] : null
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
