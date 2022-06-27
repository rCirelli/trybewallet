import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableHeaders from './TableHeaders';
import TableRow from './TableRow';
// import Button from './Button';

class ExpenseTable extends Component {
  render() {
    const { wallet } = this.props;

    return (
      <table
        className="max-w-6xl w-11/12 border border-emerald-900 rounded-lg py-1
        bg-gradient-to-b from-slate-900 backdrop-blur-sm table-auto
        flex flex-col justify-center align-center gap-3"
      >
        <TableHeaders>
          Descrição;
          Tag;
          Método de pagamento;
          Valor;
          Moeda;
          Câmbio utilizado;
          Valor convertido;
          Moeda de conversão;
          Editar/Excluir
        </TableHeaders>

        <tbody className="w-full">
          {
            wallet && wallet?.expenses?.map((entry) => (
              <TableRow key={ entry.id } rowData={ entry } />
            ))
          }
        </tbody>
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
