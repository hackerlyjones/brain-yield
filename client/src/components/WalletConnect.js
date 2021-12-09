import React from "react";
import {
  loadAccount,
  loadMembershipStatus,
  loadMembershipToken,
  loadNFTCount,
  loadWeb3
} from "../redux/interactions";
import {subscribeToAccountsChanging} from "../redux/subscriptions";
import {connect} from "react-redux";
import {accountSelector} from "../redux/selectors";

const WalletConnect = ({dispatch, account}) => {
  const connectWallet = async (event) => {
    event.preventDefault();
    const myWeb3 = await loadWeb3(dispatch);
    const account = await loadAccount(dispatch, myWeb3);
    const membershipToken = await loadMembershipToken(dispatch, myWeb3);
    await loadNFTCount(dispatch, membershipToken, account);
    await loadMembershipStatus(dispatch, membershipToken, account);
    subscribeToAccountsChanging(dispatch, myWeb3);
  }

  const buttonClass = `w-100 btn text-truncate ${(account !== null) ? "disabled btn-success" : "btn-danger"}`
  const buttonLabel = (account !== null) ? "Wallet Connected" : "Connect Wallet"

  return (
    <walletconnect>
      <div className="row justify-content-center">
        <div className="col-6">
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
    account: accountSelector(state)
  }
}

export default connect(mapStateToProps)(WalletConnect);
