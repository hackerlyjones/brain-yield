import React from "react";
import {accountSelector} from "../redux/selectors";
import {connect} from "react-redux";

const Account = ({account}) => {
  function getFormattedAccount(account) {
    if (account) {
      const accountStart = account.substring(0, 7);
      const accountEnd = account.substring(account.length - 4, account.length);
      return accountStart + "…" + accountEnd;
    }

    return "Not Connected";
  }

  return (
    <div className="row justify-content-center">
      <div className="col-6 fs-6">
        <label>Account:</label>&nbsp;<span className="font-monospace">{getFormattedAccount(account)}</span>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    account: accountSelector(state)
  }
}

export default connect(mapStateToProps)(Account);
