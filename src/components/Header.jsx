import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  state = {
    expensesTotal: 0,
    currentCurrency: 'BRL',
  }

  render() {
    const { user } = this.props;
    const { expensesTotal, currentCurrency } = this.state;

    return (
      <header
        className="flex justify-between items-center p-5 border-b border-emerald-900
        bg-gradient-to-b from-slate-900 fixed w-full z-50 top-0 backdrop-blur-sm"
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
          <div
            data-testid="total-field"
          >
            {`Despesa Total: R$ ${expensesTotal}`}
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
  user: state.user,
  wallet: state.wallet,
});

export default connect(mapStateToProps)(Header);
