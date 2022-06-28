import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextInput extends Component {
  state = { }

  render() {
    const { type, name, placeholder, onChange, label, css, id, value } = this.props;
    return (
      <div>
        <label htmlFor={ name } className="text-sm flex flex-col my-2">
          { label }
          <input
            className={ `-ml-2 rounded-md bg-slate-200 border-none text-slate-400
            outline outline-1 outline-emerald-900 outline-offset-1 bg-slate-900
            border-none placeholder:text-gray-400 py-2 pl-4 pr-2 w-36 ${css}` }
            type={ type }
            placeholder={ placeholder }
            data-testid={ name }
            id={ id }
            onChange={ onChange }
            value={ value }
          />
        </label>
      </div>
    );
  }
}

TextInput.defaultProps = {
  label: '',
  css: '',
  type: 'text',
};

TextInput.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  css: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
