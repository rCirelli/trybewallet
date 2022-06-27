import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableHeaders extends Component {
  render() {
    const { children } = this.props;
    const headerArray = children.split('; ');

    const headers = headerArray.map((header, index) => (
      <th
        key={ `0${index}` }
        className="px-3 flex-1 text-left"
      >
        {header}
      </th>
    ));

    return (
      <thead
        className="w-full border-b border-emerald-900"
      >
        <tr className="flex justify-evenly items-center text-sm text-slate-400">
          {headers}
        </tr>
      </thead>
    );
  }
}

TableHeaders.defaultProps = {
  wallet: {},
};

TableHeaders.propTypes = {
  wallet: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
};
export default TableHeaders;
