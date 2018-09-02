import { Component } from '@angular/core';
import { Expense, Category } from '../../models/expense-model';
import { BudgetService } from '../../services/budget-service';
import { compareDesc } from 'date-fns';

@Component({
  selector: 'page-analytics',
  templateUrl: 'analytics.html'
})
export class AnalyticsPage {
    public expenses: Expense[] = [];
    public categories: Category[] = this._budgetService.getCategories();

  constructor(private _budgetService: BudgetService) {
      this.getSortedExpenses();
  }

  public getSortedExpenses() {
    let sortedExpenses = this._budgetService.getBudget().expenses.sort((x, y) => {
      return compareDesc(x.date, y.date);
    });
    sortedExpenses.forEach(e => e.date = new Date(e.date));
    this.expenses = sortedExpenses;
  }

  public categorizeExpenses() {
      let categorizedExpenses:Expense[];
      this.categories.forEach(e => {
        categorizedExpenses = [];
          this.expenses.forEach(expense => {
              if(expense.category.categoryId == e.categoryId)
              {
                categorizedExpenses.push(expense);
              }
          });
        });
  }
}
