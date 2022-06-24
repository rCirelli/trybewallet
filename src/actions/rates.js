import { REQUEST_RATES, REQUEST_RATES_ERROR, SET_RATES } from './index';

export const requestRates = () => ({
  type: REQUEST_RATES,
});

export const requestRatesError = (error) => ({
  type: REQUEST_RATES_ERROR,
  payload: error.message,
});

export const setRates = (currencyArray) => ({
  type: SET_RATES,
  payload: currencyArray,
});

export const fetchRates = (query) => (dispatch) => {
  if (dispatch) dispatch(requestRates());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((json) => {
      let currencyRatesObj = json;

      if (query) {
        currencyRatesObj = { ...json[query] };
      }

      if (dispatch) dispatch(setRates(currencyRatesObj));
      return currencyRatesObj;
      // let currencyArray;

      // if (query) {
      //   currencyArray = Object.values(json)
      //     .filter((currency) => currency.code === query);
      // } else {
      //   currencyArray = Object.values(json).reduce((acc, currency) => { // retorna um array de objetos com todas informações de cada moeda
      //     if (currency.codein !== 'BRLT') {
      //       return [...acc, currency];
      //     }
      //     return acc;
      //   }, []);
      // }

      // if (dispatch) dispatch(setRates(currencyArray));
      // return currencyArray;
    })
    .catch((error) => dispatch(requestRatesError(error)));
};
