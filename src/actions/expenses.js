import { SAVE_EXPENSE, DELETE_EXPENSE, EDIT_EXPENSE, UPDATE_EXPENSE } from './index';

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

export function editExpense(expenseId) {
  return {
    type: EDIT_EXPENSE,
    payload: expenseId,
  };
}

export function updateExpense(expense) {
  return {
    type: UPDATE_EXPENSE,
    payload: expense,
  };
}
