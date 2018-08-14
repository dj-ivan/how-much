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
  remainingDays: number;
}

export enum BudgetFrequency {
  WEEKLY = 7,
  BIWEEKLY = 14,
  MONTHLY = 31
}

export enum CacheItems {
  BUDGET,
  EXPENSES,
  ACCOUNT
}
