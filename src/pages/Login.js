import { TextField } from '@material-ui/core';
// import { validate } from 'react-email-validator'; // https://www.npmjs.com/package/react-email-validator
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import setUserEmail from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isEmailValid: null,
    isPassValid: null,
    isFormValid: false,
  };

  handleChange = ({ target }) => {
    const MIN_PASS_LENGTH = 6;

    this.setState({ [target.id]: target.value },
      () => {
        const { email, password } = this.state;

        const isEmailValid = this.validateEmail(email);
        const isPassValid = password.length >= MIN_PASS_LENGTH;
        const isFormValid = isEmailValid && isPassValid;

        this.setState({ isEmailValid, isPassValid, isFormValid });
      });
  };

  handleSubmit = () => {
    const { dispatch, history } = this.props;
    const { email } = this.state;

    dispatch(setUserEmail(email));
    history.push('/carteira');
  };

  validateEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }

  render() {
    const { email, password, isFormValid, isEmailValid, isPassValid } = this.state;
    return (
      <div className="flex justify-center items-center h-screen">
        <div
          className="bg-slate-300 w-[300px] rounded-lg pt-6 pb-10
          flex flex-col justify-center items-center gap-6"
        >
          <div className="flex flex-col justify-center items-center">
            <img
              src="logo512.png"
              alt="react-wallet"
              className="w-1/3 animate-pulse brightness-70"
            />
            <span className="text-3xl z-10 drop-shadow-lg text-gray-700">
              React Wallet
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <TextField
              key="email-input"
              type="email"
              label="Email"
              variant="filled"
              id="email"
              data-testid="email-input"
              value={ email }
              onChange={ this.handleChange }
              helperText={
                email.length > 0 && !isEmailValid ? 'Email inválido' : null
              }
              color={
                email.length > 0 && !isEmailValid ? 'secondary' : 'primary'
              }
            />
            <TextField
              key="password-input"
              type="password"
              label="Senha"
              variant="filled"
              id="password"
              data-testid="password-input"
              value={ password }
              onChange={ this.handleChange }
              helperText={
                password.length > 0 && !isPassValid
                  ? 'Mínimo de 6 caracteres'
                  : null
              }
              color={
                password.length > 0 && !isPassValid ? 'secondary' : 'primary'
              }
            />
            <button
              type="button"
              className="inline-block px-6 py-3 bg-blue-600 text-white mb-3
              font-medium text-base leading-tight uppercase rounded-md shadow-md
              hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg
              focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg
              transition duration-150 ease-in-out
              disabled:saturate-0 disabled:brightness-50"
              onClick={ this.handleSubmit }
              disabled={ !isFormValid }
            >
              Entrar
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(Login);
