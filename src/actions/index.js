export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const REQUEST_CURRENCIES = 'GET_CURRENCIES';
export const REQUEST_CURRENCIES_ERROR = 'GET_CURRENCIES_ERROR';

export default function setUserEmail(email) {
  return {
    type: SET_USER_EMAIL,
    payload: { email },
  };
}

export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

export const requestCurrenciesError = () => ({
  type: REQUEST_CURRENCIES_ERROR,
});
