// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  SET_CURRENCIES, REQUEST_CURRENCIES_ERROR, // REQUEST_CURRENCIES,
  SAVE_EXPENSE, DELETE_EXPENSE, EDIT_EXPENSE, UPDATE_EXPENSE,
  // REQUEST_RATES_ERROR, // SET_RATES, // REQUEST_RATES
} from '../actions';

const INITIAL_STATE = {
  // rates: [], // array de objetos
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: NaN, // valor numérico que armazena o id da despesa que esta sendo editada
  error: '',
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES_ERROR:
    return { ...state, error: action.payload };

  case SET_CURRENCIES:
    return { ...state, currencies: action.payload };

    // case REQUEST_RATES_ERROR:
    //   return { ...state, error: action.payload };

    // case SET_RATES:
    //   return { ...state, rates: action.payload };

  case SAVE_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload] };

  case EDIT_EXPENSE:
    return {
      ...state,
      editor: true,
      idToEdit: action.payload,
    };

  case UPDATE_EXPENSE:
    return {
      ...state,
      editor: false,
      idToEdit: NaN,
      expenses: state.expenses.map((expense) => {
        if (expense.id === action.payload.id) {
          return action.payload;
        }
        return expense;
      }),
    };

  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.payload),
    };

  default:
    return state;
  }
};

export default walletReducer;
