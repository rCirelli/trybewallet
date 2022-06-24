import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Dropdown extends Component {
  state = {};

  render() {
    const { name, onChange, label, options, id, defaultValue } = this.props;

    const optionsList = () => {
      const list = [...options];
      return list.map((option) => (
        <option key={ option } value={ option }>
          {option}
        </option>
      ));
    };

    return (
      <div>
        <label htmlFor={ id } className="text-sm flex flex-col my-2">
          {label}
          <select
            defaultValue={ defaultValue }
            onChange={ onChange }
            name={ name }
            data-testid={ name }
            id={ id }
            className={ `-ml-2 rounded-md bg-slate-200 border-none text-slate-400
            outline outline-1 outline-emerald-900 outline-offset-1 bg-slate-900
            border-none placeholder:text-gray-400 py-2 pl-4 pr-8` }
          >
            {optionsList()}
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
  defaultValue: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Dropdown;
