export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const REQUEST_CURRENCIES = 'GET_CURRENCIES';
export const REQUEST_CURRENCIES_ERROR = 'GET_CURRENCIES_ERROR';
export const SET_CURRENCIES = 'SET_CURRENCIES';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';
// const axios = require('axios').default;

export default function setUserEmail(email) {
  return {
    type: SET_USER_EMAIL,
    payload: { email },
  };
}

export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

export const requestCurrenciesError = (error) => ({
  type: REQUEST_CURRENCIES_ERROR,
  payload: error.message,
});

export const setCurrencies = (currencyArray) => ({
  type: SET_CURRENCIES,
  payload: currencyArray,
});

export const fetchCurrencies = () => (dispatch) => {
  dispatch(requestCurrencies());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((json) => {
      const currencyArray = Object.keys(json).reduce((acc, currency) => {
        if (currency !== 'USDT') {
          return [...acc, currency];
        }
        return acc;
      }, []);
      // const currencyArray = Object.values(json).reduce((acc, currency) => { // retorna um array de objetos com todas informações de cada moeda
      //   if (currency !== 'USDT') {
      //     return [...acc, currency];
      //   }
      //   return acc;
      // }, []);
      dispatch(setCurrencies(currencyArray));
    })
    .catch((error) => dispatch(requestCurrenciesError(error)));
};

export const saveExpense = (expense) => ({
  type: SAVE_EXPENSE,
  payload: expense,
});
