import { Component, ViewChild, ElementRef } from '@angular/core';
import { Expense, Category } from '../../models/expense-model';
import { BudgetService } from '../../services/budget-service';
import { compareDesc } from 'date-fns';
import { Chart } from 'chart.js';
import 'chartjs-plugin-labels';

@Component({
  selector: 'page-analytics',
  templateUrl: 'analytics.html'
})
export class AnalyticsPage {
    public expenses: Expense[] = [];
    public categories: Category[] = this._budgetService.getCategories();
    public myChart = [];
    public chartData = new Map<string,number>();

  constructor(private _budgetService: BudgetService) {
  }

  public getSortedExpenses() {
    let sortedExpenses = this._budgetService.getBudget().expenses.sort((x, y) => {
      return compareDesc(x.date, y.date);
    });
    sortedExpenses.forEach(e => e.date = new Date(e.date));
    this.expenses = sortedExpenses;
  }

  public getChartData() {
      this.expenses.forEach(e => {
        if (this.chartData[e.category.name] == undefined || this.chartData[e.category.name] == null) {
            this.chartData[e.category.name] = e.amount;
        }
        else {
            this.chartData[e.category.name] += e.amount;
        }
      });
      return this.chartData;
  }

  public generateRandomColor() {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        return "rgba(" + r + ", " + g + ", " + b;
  }

  public predefinedColorValues() {
      return ["rgba(151, 217, 255, 1)"
      ,"rgba(27, 170, 47, 1)"
      ,"rgba(255, 236, 0, 1)"
      ,"rgba(255, 115, 0, 1)"
      ,"rgba(255, 0, 0, 1)"
      ,"rgba(224, 30, 132, 1)"
      ,"rgba(198, 88, 208, 1)"
      ,"rgba(142, 108, 239, 1)"
      ,"rgba(156, 70, 208, 1)"
      ,"rgba(131, 153, 235, 1)"
      ,"rgba(0, 126, 214, 1)"
      ,"rgba(124, 221, 221, 1)"
      ,"rgba(95, 183, 212, 1)"
      ,"rgba(38, 215, 174, 1)"
      ,"rgba(45, 203, 117, 1)"
      ,"rgba(82, 215, 38, 1)"
      ,"rgba(213, 243, 11, 1)"
      ,"rgba(255, 175, 0, 1)"
      ];
  }

  ionViewWillEnter() {
    this.expenses = [];
    this.categories = this._budgetService.getCategories();
    this.myChart = [];
    this.chartData = new Map<string,number>();
    this.getSortedExpenses();
    this.getChartData();
      let chartLabels = [];
      let chartData = [];
      let chartColors = this.predefinedColorValues();
      let chartBorderColors = this.predefinedColorValues();

      this.expenses.forEach(e => {
        if(chartLabels.indexOf(e.category.name) == -1) {
            chartLabels.push(e.category.name);
            var color = this.generateRandomColor();
            chartColors.push(color + ", 0.2)");  
            chartBorderColors.push(color + ", 1)"); 
        }
        let catIndex = chartLabels.indexOf(e.category.name);
        if ( chartData[catIndex] == undefined || chartData[catIndex] == undefined) {
            chartData[catIndex] = e.amount;
        }
        else {
            chartData[catIndex] += e.amount;
        }           
      });

      this.myChart = new Chart('myChart', {
        type: 'doughnut',
        data: {
            labels: chartLabels,
            datasets: [{
                label: 'Amount Spent By Category',
                data: chartData,
                backgroundColor:chartColors,
                borderColor:chartBorderColors,
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                labels: [
                    {
                    // render 'label', 'value', 'percentage', 'image' or custom function, default is 'percentage'
                    render: function (args) {
                        return '$' + args.value;
                    }},
                    {
                    render: 'label',
                    position: 'outside',
                    arc: true,
                    overlap: false
                    }
                    // ,
                    // {
                    //     render: 'value'
                    // }
                ]
        }
    }});
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
