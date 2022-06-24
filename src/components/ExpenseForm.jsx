import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';
import TextInput from './TextInput';

class ExpenseForm extends Component {
  state = { }

  onChangeHandler = () => {
    //
  }

  render() {
    const { wallet } = this.props;

    return (
      <div
        className="w-11/12 border border-emerald-900 rounded-lg px-3 py-6
        bg-gradient-to-b from-slate-900 fixed w-full z-50 top-20 backdrop-blur-sm
        flex flex-wrap justify-center align-center gap-5"
      >
        <div className="flex flex-wrap justify-center align-center gap-5">
          <TextInput
            label="Valor"
            name="value-input"
            placeholder="0"
            onChange={ this.onChangeHandler }
          />
          <Dropdown
            name="currency-input"
            placeholder="BRL"
            onChange={ this.onChangeHandler }
            label="Moeda"
            options={ wallet.currencies }
          />
          <Dropdown
            name="method-input"
            placeholder="Meio de pagamento"
            onChange={ this.onChangeHandler }
            label="Meio de Pagamento"
            options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          />
          <Dropdown
            name="tag-input"
            placeholder="Tag"
            onChange={ this.onChangeHandler }
            label="Tag"
            options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          />
        </div>
        <TextInput
          label="Descrição"
          name="description-input"
          placeholder="Descrição"
          onChange={ this.onChangeHandler }
        />
      </div>
    );
  }
}

ExpenseForm.propTypes = {
  wallet: PropTypes.shape({
    currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
    expenses: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      method: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      exchangeRates: PropTypes.string.isRequired,
    })).isRequired,
    editor: PropTypes.bool.isRequired,
    idToEdit: PropTypes.number.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

export default connect(mapStateToProps)(ExpenseForm);
