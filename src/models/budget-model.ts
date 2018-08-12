import { Expense } from './expense-model';

export interface Budget {
  income: number;
  startingBudget: number;
  budgetFrequency: BudgetFrequency;
  remainingBudget: number;
  totalAmountSpent: number;
  expenses: Expense[];
  budgetStartingDate: Date;
  budgetEndDate: Date;
}

export enum BudgetFrequency {
  WEEKLY,
  BIWEEKLY,
  MONTHLY
}
