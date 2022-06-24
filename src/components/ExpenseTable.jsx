import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableHeaders from './TableHeaders';
// import Button from './Button';

class ExpenseTable extends Component {
  render() {
    return (
      <table
        className="max-w-6xl w-11/12 border border-emerald-900 rounded-lg px-3 py-1
        bg-gradient-to-b from-slate-900 backdrop-blur-sm
        flex flex-col justify-center align-center gap-3"
      >
        <thead className="w-full flex flex-wrap justify-evenly align-center">
          <TableHeaders />

        </thead>
      </table>
    );
  }
}

ExpenseTable.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  wallet: PropTypes.shape({
    currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
    expenses: PropTypes.arrayOf(PropTypes.shape({
      // id: PropTypes.number.isRequired,
      // value: PropTypes.string.isRequired,
      // currency: PropTypes.string.isRequired,
      // method: PropTypes.string.isRequired,
      // tag: PropTypes.string.isRequired,
      // description: PropTypes.string.isRequired,
      // exchangeRates: PropTypes.string.isRequired,
    })).isRequired,
    editor: PropTypes.bool.isRequired,
    idToEdit: PropTypes.number.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

export default connect(mapStateToProps)(ExpenseTable);
