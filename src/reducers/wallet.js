// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SET_CURRENCIES, REQUEST_CURRENCIES, REQUEST_CURRENCIES_ERROR } from '../actions';

const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
  error: '',
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return state;

  case REQUEST_CURRENCIES_ERROR:
    return { ...state, error: action.payload };

  case SET_CURRENCIES:
    return { ...state, currencies: action.payload };

  default:
    return state;
  }
};

export default walletReducer;
