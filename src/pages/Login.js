// import { TextField } from '@material-ui/core';
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
    this.setState({ [target.id]: target.value }, this.validateForm);
  };

  validateForm = () => {
    const MIN_PASS_LENGTH = 6;
    const { email, password, isEmailValid, isPassValid } = this.state;

    let validEmail = isEmailValid;
    let validPassword = isPassValid;

    if (email.length > 0) validEmail = this.validateEmail(email);
    if (password.length > 0) validPassword = password.length >= MIN_PASS_LENGTH;

    const isFormValid = (validEmail && validPassword) || false;

    this.setState({ isEmailValid: validEmail, isPassValid: validPassword, isFormValid });
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
            {/* <TextField
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
            /> */}
            <input
              type="email"
              placeholder="Email"
              className={ `rounded-md bg-gray-900 border-none
              text-gray-400 placeholder:text-gray-700
              ${isEmailValid === false && 'outline outline-red-600 text-red-600'} ` }
              id="email"
              data-testid="email-input"
              value={ email }
              onChange={ this.handleChange }
            />
            {isEmailValid === false && (
              <span className="text-red-600">Email inválido</span>
            )}
            <input
              type="password"
              placeholder="Senha"
              className={ `rounded-md bg-gray-900 border-none
              text-gray-400 placeholder:text-gray-700
              ${isPassValid === false && 'outline outline-red-600 text-red-600'} ` }
              id="password"
              data-testid="password-input"
              value={ password }
              onChange={ this.handleChange }
            />
            {isPassValid === false && (
              <span className="text-red-600">Mínimo de 6 caracteres</span>
            )}
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
