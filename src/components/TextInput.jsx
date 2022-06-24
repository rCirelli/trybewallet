import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextInput extends Component {
  state = { }

  render() {
    const { name, placeholder, onChange, label } = this.props;
    return (
      <div>
        <label htmlFor={ name }>
          { label }
          <input
            className={ `ml-3 rounded-md bg-slate-200 border-none text-slate-400
            outline outline-1 outline-emerald-900 outline-offset-1 bg-slate-900
            border-none placeholder:text-gray-400 py-2 pl-4 pr-2 w-36` }
            type="text"
            placeholder={ placeholder }
            data-testid={ name }
            id={ name }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

TextInput.defaultProps = {
  label: '',
};

TextInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
