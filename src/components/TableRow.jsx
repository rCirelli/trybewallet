import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TrashSimple, PencilSimple } from 'phosphor-react';
import { deleteExpense, editExpense } from '../actions/expenses';

class TableRow extends Component {
  deleteExpense = () => {
    const { dispatch, rowData } = this.props;
    dispatch(deleteExpense(rowData.id));
  }

  editExpense = () => {
    const { dispatch, rowData } = this.props;
    dispatch(editExpense(rowData.id));
  }

  render() {
    const { rowData } = this.props;
    const { currency } = rowData;
    const currencyInfo = rowData?.exchangeRates[currency];
    const currencyRate = currencyInfo?.ask;
    const currencyName = currencyInfo?.name.split('/')[0];
    const targetCurrencyName = 'Real';
    const convertedValue = (Number(currencyRate) * Number(rowData.value)).toFixed(2);

    return (
      <tr className="flex justify-evenly items-center text-slate-400 text-sm">
        { rowData && (
          <>
            <td
              className="px-3 flex-1"
            >
              {rowData.description}
            </td>
            <td
              className="px-3 border-l border-emerald-900 flex-1"
            >
              {rowData.tag}
            </td>
            <td
              className="px-3 border-l border-emerald-900 flex-1"
            >
              {rowData.method}
            </td>
            <td
              className="px-3 border-l border-emerald-900 flex-1"
            >
              {Number(rowData.value).toFixed(2)}
            </td>
            <td
              className="px-3 border-l border-emerald-900 flex-1"
            >
              {currencyName}
            </td>
            <td
              className="px-3 border-l border-emerald-900 flex-1"
            >
              {Number(currencyRate).toFixed(2)}
            </td>
            <td
              className="px-3 border-l border-emerald-900 flex-1"
            >
              {convertedValue}
            </td>
            <td
              className="px-3 border-l border-emerald-900 flex-1"
            >
              {targetCurrencyName}
            </td>
            <td
              className="px-3 border-l border-emerald-900 flex-1 flex justify-evenly"
            >
              <button
                type="button"
                data-testid="edit-btn"
                onClick={ this.editExpense }
              >
                <PencilSimple size={ 20 } color="#38bdf8" weight="bold" />
              </button>
              <button
                type="button"
                data-testid="delete-btn"
                onClick={ this.deleteExpense }
              >
                <TrashSimple size={ 20 } color="#dc2626" weight="bold" />
              </button>
            </td>
          </>
        )}
      </tr>
    );
  }
}

TableRow.defaultProps = ({
  rowData: {
    id: 0,
    value: '',
    currency: '',
    method: '',
    tag: '',
    description: '',
    exchangeRates: {
      code: '',
      ask: '',
    },
  },
});

TableRow.propTypes = {
  dispatch: PropTypes.func.isRequired,
  rowData: PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    description: PropTypes.string,
    exchangeRates: PropTypes.shape({
      code: PropTypes.string,
      ask: PropTypes.string,
    }),
  }),
};

export default connect()(TableRow);
