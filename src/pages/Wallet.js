import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { fetchCurrencies } from '../actions/currencies';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseTable from '../components/ExpenseTable';

class Wallet extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrencies());
  }

  render() {
    // const { user, wallet } = this.props;
    // console.log(user, wallet);

    return (
      <div
        className="min-h-screen w-full bg-gradient-to-t from-emerald-900 to-slate-900"
      >
        <div
          className="flex flex-col justify-start items-center min-h-screen w-full gap-5
            backdrop-brightness-[0.3] pb-8"
        >
          <Header />
          <ExpenseForm />
          <ExpenseTable />
        </div>
      </div>
    );
  }
}

Wallet.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
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
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,
});

export default connect(mapStateToProps)(Wallet);
