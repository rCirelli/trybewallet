import { SAVE_EXPENSE, DELETE_EXPENSE } from './index';

export default function saveExpense(expense) {
  return {
    type: SAVE_EXPENSE,
    payload: expense,
  };
}

export function deleteExpense(expenseId) {
  return {
    type: DELETE_EXPENSE,
    payload: expenseId,
  };
}
