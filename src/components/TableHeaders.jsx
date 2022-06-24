import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpenseTable extends Component {
  render() {
    return (
      <tr>
        <th
          className="text-sm pr-3 w-24 text-slate-400"
        >
          Descrição
        </th>
        <th
          className="text-sm px-3 border-x border-emerald-900 w-24 text-slate-400"
        >
          Tag
        </th>
        <th
          className="text-sm px-3 border-x border-emerald-900 w-24 text-slate-400"
        >
          Método de pagamento
        </th>
        <th
          className="text-sm px-3 border-x border-emerald-900 w-24 text-slate-400"
        >
          Valor
        </th>
        <th
          className="text-sm px-3 border-x border-emerald-900 w-24 text-slate-400"
        >
          Moeda
        </th>
        <th
          className="text-sm px-3 border-x border-emerald-900 w-24 text-slate-400"
        >
          Câmbio utilizado
        </th>
        <th
          className="text-sm px-3 border-x border-emerald-900 w-24 text-slate-400"
        >
          Valor convertido
        </th>
        <th
          className="text-sm px-3 border-x border-emerald-900 w-24 text-slate-400"
        >
          Moeda de conversão
        </th>
        <th
          className="text-sm pl-3 w-24 text-slate-400"
        >
          Editar/Excluir
        </th>
      </tr>
    );
  }
}

ExpenseTable.defaultProps = {
  wallet: {},
};

ExpenseTable.propTypes = {
  wallet: PropTypes.shape({}),
};
export default ExpenseTable;
