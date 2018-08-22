export interface Expense {
  id: string;
  amount: number;
  date: Date;
  name: string;
  category: Category;
}

export interface Category {
  name: string;
  categoryId: number;
}
