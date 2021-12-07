import React from "react";
import {accountSelector, contractSelector, valueSelector} from "../redux/selectors";
import {connect} from "react-redux";

const Account = ({account}) => {
  const accountStart = account.substring(0, 7)
  const accountEnd = account.substring(account.length - 4, account.length)
  return (
    <account>
      <div className="row justify-content-center">
        <div className="col-4 fs-6">
          <label>Account:</label> <span className="font-monospace">{accountStart}…{accountEnd}</span>
        </div>
      </div>
    </account>
  )
}

function mapStateToProps(state) {
  return {
    account: accountSelector(state)
  }
}

export default connect(mapStateToProps)(Account);
