import React from "react";
import {connect} from "react-redux";
import {membershipStatusSelector, nftCountSelector} from "../redux/selectors";

const Member = ({count, status}) => {
  const isMember = status ? "Yes" : "No";
  return (
    <member>
      <div className="row justify-content-center">
        <div className="col-6">
          <label>Member:</label>&nbsp;<span>{isMember}</span>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-6">
          <label>NFTs Owned:</label>&nbsp;<span>{count}</span>
        </div>
      </div>
    </member>
  )
}

function mapStateToProps(state) {
  return {
    count: nftCountSelector(state),
    status: membershipStatusSelector(state)
  }
}

export default connect(mapStateToProps)(Member);
