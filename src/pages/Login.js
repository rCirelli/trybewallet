// import { validate } from 'react-email-validator'; // https://www.npmjs.com/package/react-email-validator
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import setUserEmail from '../actions';

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

  handleSubmit = () => {
    const { dispatch, history } = this.props;
    const { email } = this.state;

    dispatch(setUserEmail(email));
    history.push('/carteira');
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

  validateEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }

  render() {
    const { email, password, isFormValid, isEmailValid, isPassValid } = this.state;
    return (
      <main className="flex justify-center items-center h-screen">
        <div
          className="bg-slate-300 w-[300px] rounded-lg py-6
          flex flex-col justify-center items-center gap-6"
        >
          <div className="flex flex-col justify-center items-center">
            <img
              src="logo512.png"
              alt="react-wallet"
              className="w-1/3 animate-pulse animate-[spin_4s_ease-in-out_infinite]
              brightness-75"
            />
            <span className="text-3xl z-10 drop-shadow-lg text-gray-700 font-light">
              React Wallet
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                className={ `rounded-md bg-gray-900 border-none
                text-gray-400 placeholder:text-gray-700
                ${isEmailValid === false && 'border-2 border-red-600 text-red-600'} ` }
                id="email"
                data-testid="email-input"
                value={ email }
                onChange={ this.handleChange }
              />
              {isEmailValid === false && (
                <span
                  className="text-red-600 text-xs block mt-0.5"
                >
                  Email inválido
                </span>
              )}
            </div>
            <div>
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
                <span
                  className="text-red-600 text-xs block mt-0.5"
                >
                  Mínimo de 6 caracteres
                </span>
              )}
            </div>
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
      </main>
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
