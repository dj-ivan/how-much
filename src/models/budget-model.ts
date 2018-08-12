import { Expense } from './expense-model';
export interface Budget {
  income: number;
  startingBudget: number;
  budgetDuration: string;
  remainingBudget: number;
  totalExpenses: number;
  expenses: Expense[];
}
