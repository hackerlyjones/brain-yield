import React from "react";
import {loadAccount, loadContract, loadStoredData, loadWeb3} from "../redux/interactions";
import {subscribeToAccountsChanging} from "../redux/subscriptions";
import {connect} from "react-redux";
import {contractSelector} from "../redux/selectors";

const WalletConnect = ({dispatch, contract}) => {
  const connectWallet = async (event) => {
    event.preventDefault();
    const myWeb3 = await loadWeb3(dispatch);
    await loadAccount(dispatch, myWeb3);
    const myContract = await loadContract(dispatch, myWeb3);
    await loadStoredData(dispatch, myContract);
    subscribeToAccountsChanging(dispatch, myWeb3);
  }

  const buttonClass = `w-100 btn text-truncate ${(contract !== null) ? "disabled btn-success" : "btn-danger"}`
  const buttonLabel = (contract !== null) ? "Wallet Connected" : "Connect Wallet"

  return (
    <walletconnect>
      <div className="row justify-content-center">
        <div className="col-4">
          <form onSubmit={connectWallet}>
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
    </walletconnect>
  )
}

function mapStateToProps(state) {
  return {
    contract: contractSelector(state)
  }
}

export default connect(mapStateToProps)(WalletConnect);
