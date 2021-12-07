import React, {Component} from "react";
import {connect} from 'react-redux';
import {loadWeb3, loadContract, loadAccount, loadStoredData} from "./redux/interactions";
import {contractSelector, valueSelector} from "./redux/selectors";
import {subscribeToAccountsChanging} from "./redux/subscriptions";
import Account from "./components/Account";
import Header from "./components/Header";

class App extends Component {
  render() {
    const {dispatch, contract, value} = this.props;

    const connectBlockchain = async (e) => {
      e.preventDefault();
      const myWeb3 = await loadWeb3(dispatch);
      await loadAccount(dispatch, myWeb3);
      const myContract = await loadContract(dispatch, myWeb3);
      await loadStoredData(dispatch, myContract);
      subscribeToAccountsChanging(dispatch, myWeb3);
    }

    const buttonClass = `w-100 btn text-truncate ${(contract !== null) ? "disabled btn-success" : "btn-danger"}`
    const buttonLabel = (contract !== null) ? "Wallet Connected" : "Connect Wallet"

    return (
      <div className="container py-2">
        <Header />
        <div className="row justify-content-center">
          <div className="col-4">
            <form onSubmit={connectBlockchain}>
              <div className="form-group row">
                <div className="col-12">
                  <button type="submit" className={buttonClass}>
                    {buttonLabel}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Account state={this.state} />
        <div className="row justify-content-center">
          <div className="col-4">
            <label>Contract Value: </label>
            <label>{value}</label>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    contract: contractSelector(state),
    value: valueSelector(state)
  }
}

export default connect(mapStateToProps)(App);
