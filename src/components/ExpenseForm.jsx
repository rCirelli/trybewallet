import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';
import TextInput from './TextInput';
import Button from './Button';
import saveExpense, { updateExpense } from '../actions/expenses';
import { fetchRates } from '../actions/rates';

class ExpenseForm extends Component {
  INITIAL_STATE = {
    value: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    description: '',
  };

  state = this.INITIAL_STATE;

  componentDidUpdate(prevProps) {
    const { expenseToEdit } = this.props;

    if (prevProps.expenseToEdit !== expenseToEdit) {
      this.updateExpenseState();
    }
  }

  updateExpenseState = () => {
    const { expenseToEdit } = this.props;

    this.setState({ ...expenseToEdit });
  }

  onChangeHandler = ({ target }) => {
    this.setState({ [target.id]: String(target.value) });
  }

  handleSubmit = async () => {
    const { dispatch, wallet, editor } = this.props;

    if (!editor) {
      const id = wallet.expenses.length;
      const exchangeRates = await fetchRates()();
      const expense = { ...this.state, id, exchangeRates };
      dispatch(saveExpense(expense));
    }
    if (editor) {
      dispatch(updateExpense({ ...this.state }));
    }
    this.setState({ ...this.INITIAL_STATE });
  }

  editMode = () => {
    const { editor, idToEdit, wallet: { expenses } } = this.props;
    if (editor) {
      const expense = expenses.find(({ id }) => id === idToEdit);
      return expense;
    }
  }

  render() {
    const { wallet, editor } = this.props;
    const { value, description, currency, method, tag } = this.state;

    return (
      <div
        className={ `max-w-6xl w-11/12 border border-emerald-900 rounded-lg px-3 py-3 pb-5
        bg-gradient-to-b from-slate-900 w-full backdrop-blur-sm mt-[5.5rem]
        flex flex-wrap justify-center align-center gap-5 ${editor && 'border-red-600'}` }
      >
        <div className="w-full flex flex-wrap justify-evenly align-center">
          <TextInput
            type="number"
            id="value"
            label="Valor"
            name="value-input"
            placeholder="0"
            onChange={ this.onChangeHandler }
            value={ value }
          />
          <Dropdown
            defaultValue={ currency }
            id="currency"
            name="currency-input"
            onChange={ this.onChangeHandler }
            label="Moeda"
            options={ wallet.currencies }
          />
          <Dropdown
            defaultValue={ method }
            id="method"
            name="method-input"
            placeholder="Meio de pagamento"
            onChange={ this.onChangeHandler }
            label="Meio de Pagamento"
            options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          />
          <Dropdown
            defaultValue={ tag }
            id="tag"
            name="tag-input"
            placeholder="Tag"
            onChange={ this.onChangeHandler }
            label="Tag"
            options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          />
          <TextInput
            id="description"
            css="flex-1 w-80"
            label="Descrição"
            name="description-input"
            placeholder="Descrição"
            onChange={ this.onChangeHandler }
            value={ description }
          />
          <Button
            css={ `max-h-10 self-end ${editor && 'bg-red-800 hover:bg-red-900'}` }
            name="btn-add-expense"
            label={ editor ? 'Editar despesa' : 'Adicionar despesa' }
            onClick={ this.handleSubmit }
          />
        </div>
      </div>
    );
  }
}

ExpenseForm.defaultProps = {
  idToEdit: 0,
  editor: false,
  expenseToEdit: {
    id: NaN,
    value: '',
    currency: '',
    method: '',
    tag: '',
    description: '',
    exchangeRates: '',
  },
};

ExpenseForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
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
  }).isRequired,
  editor: PropTypes.bool,
  idToEdit: PropTypes.number,
  expenseToEdit: PropTypes.shape({
    // id: PropTypes.number,
    value: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    description: PropTypes.string,
    // exchangeRates: PropTypes.string,
  }),
};

const mapStateToProps = (state) => ({
  wallet: state.wallet,
  editor: state.wallet.editor,
  idToEdit: state.wallet.idToEdit,
  expenseToEdit: state.wallet.editor
    ? state.wallet.expenses.find(({ id }) => id === state.wallet.idToEdit) : {},
});

export default connect(mapStateToProps)(ExpenseForm);
