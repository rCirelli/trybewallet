import { SAVE_EXPENSE } from './index';

export default function saveExpense(expense) {
  return {
    type: SAVE_EXPENSE,
    payload: expense,
  };
}
