import { Component, ViewChild, ElementRef } from '@angular/core';
import { Expense, Category } from '../../models/expense-model';
import { BudgetService } from '../../services/budget-service';
import { compareDesc } from 'date-fns';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-analytics',
  templateUrl: 'analytics.html'
})
export class AnalyticsPage {
    public expenses: Expense[] = [];
    public categories: Category[] = this._budgetService.getCategories();
    public myChart = [];

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

  ionViewDidLoad() {
      this.myChart = new Chart('myChart', {
        type: 'doughnut',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        }
    });
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
