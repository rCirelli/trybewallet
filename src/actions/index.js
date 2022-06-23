export const SET_USER_EMAIL = 'SET_USER_EMAIL';

const setUserEmail = (email) => ({
  type: SET_USER_EMAIL,
  payload: { email },
});

export default setUserEmail;
