import { REQUEST_CURRENCIES, REQUEST_CURRENCIES_ERROR, SET_CURRENCIES } from './index';

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
