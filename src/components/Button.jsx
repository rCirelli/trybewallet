import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  state = { }

  render() {
    const { name, label, onClick, disabled, css } = this.props;
    return (
      <button
        data-testid={ name }
        id={ name }
        type="button"
        className={ `inline-block px-6 py-3 bg-emerald-600 text-white my-2
      font-medium text-base leading-tight rounded-md shadow-md
      hover:bg-emerald-700 hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg
      focus:outline-none focus:ring-0 active:bg-emerald-800 active:shadow-lg
      transition duration-150 ease-in-out
      disabled:saturate-0 disabled:brightness-50 disabled:bg-emerald-900
      disabled:text-emerald-500 ${css}` }
        onClick={ onClick }
        disabled={ disabled }
      >
        {label}
      </button>
    );
  }
}

Button.defaultProps = {
  disabled: false,
  css: '',
};

Button.propTypes = {
  css: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
