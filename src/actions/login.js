import { SET_USER_EMAIL } from './index';

export default function setUserEmail(email) {
  return {
    type: SET_USER_EMAIL,
    payload: { email },
  };
}
