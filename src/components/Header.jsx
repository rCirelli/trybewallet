import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  state = {
    expensesTotal: 0,
    currentCurrency: 'BRL',
  }

  componentDidUpdate() {
    this.sumExpenses();
  }

  sumExpenses = () => {
    const { expensesTotal } = this.state;
    const { wallet: { expenses } } = this.props;

    const totalExpense = expenses.reduce((acc, expense) => {
      const expenseCurrency = expense.currency;
      const expenseValue = Number(expense.value);
      const exchangeRate = Number(expense.exchangeRates[expenseCurrency].ask);

      const newValue = expenseValue * exchangeRate;

      return (newValue + acc);
    }, 0).toFixed(2);

    if (expensesTotal !== totalExpense) {
      this.setState({ expensesTotal: totalExpense });
    }
  }

  render() {
    const { user } = this.props;
    const { expensesTotal, currentCurrency } = this.state;

    return (
      <header
        className="flex justify-between items-center p-5 border-b border-emerald-900
        bg-gradient-to-b from-slate-900 fixed w-full z-50 top-0 backdrop-blur-sm h-18"
      >
        <img
          src="logo512.png"
          alt="react-wallet"
          className="w-1/3 brightness-75 hue-rotate-15 w-[30px]"
        />
        <div className="flex gap-10">
          <div
            data-testid="email-field"
          >
            {`Email: ${user.email}`}
          </div>
          <div className="flex justify-center align-center gap-1">
            Despesa Total: R$
            <div
              data-testid="total-field"
            >
              {expensesTotal}
            </div>
          </div>
          <div
            data-testid="header-currency-field"
          >
            {`🪙 ${currentCurrency}`}
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
  wallet: PropTypes.shape({
    currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
    expenses: PropTypes.arrayOf(PropTypes.shape({
      // id: PropTypes.string.isRequired,
      // value: PropTypes.string.isRequired,
      // currency: PropTypes.string.isRequired,
      // method: PropTypes.string.isRequired,
      // tag: PropTypes.string.isRequired,
      // description: PropTypes.string.isRequired,
      exchangeRates: PropTypes.shape({
        code: PropTypes.string,
        ask: PropTypes.string,
      }).isRequired,
    })).isRequired,
    editor: PropTypes.bool.isRequired,
    idToEdit: PropTypes.number.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,
});

export default connect(mapStateToProps)(Header);
