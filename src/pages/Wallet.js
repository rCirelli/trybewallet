import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    const { user, wallet } = this.props;
    console.log(user, wallet);

    return (
      <>
        <Header />
        <div
          className="flex justify-center items-center h-full w-full
            bg-gradient-to-t from-emerald-900 to-slate-900 brightness-[0.3]"
        >
          <span>Wallet</span>
        </div>
      </>
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

export default connect(mapStateToProps)(Wallet);
