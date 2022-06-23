// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SET_USER_EMAIL } from '../actions/index';

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  if (action.type === SET_USER_EMAIL) {
    return {
      ...state,
      email: action.payload.email,
    };
  }
  return state;
};

export default userReducer;
