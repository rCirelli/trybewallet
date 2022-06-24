import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Dropdown extends Component {
  state = {};

  render() {
    const { name, onChange, label, options } = this.props;

    const optionsList = () => {
      const list = [...options];
      return list.map((option) => (
        <option key={ option } value={ option }>{ option }</option>
      ));
    };

    return (
      <div>
        <label htmlFor={ name }>
          {label}
          <select
            onChange={ onChange }
            name={ name }
            data-testid={ name }
            id={ name }
            className={ `ml-3 rounded-md bg-slate-200 border-none text-slate-400
            outline outline-1 outline-emerald-900 outline-offset-1 bg-slate-900
            border-none placeholder:text-gray-400 py-2 pl-4 pr-8` }
          >
            { optionsList() }
          </select>
        </label>
      </div>
    );
  }
}

Dropdown.defaultProps = {
  label: '',
};

Dropdown.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.shape({
    currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Dropdown;
