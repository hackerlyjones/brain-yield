import React from "react";
import {connect} from "react-redux";
import {valueSelector} from "../redux/selectors";

const TokenBalance = ({value}) => {
  return (
    <tokenbalance>
      <div className="row justify-content-center">
        <div className="col-4">
          <label>Contract Value: </label>
          <label>{value}</label>
        </div>
      </div>
    </tokenbalance>
  )
}

function mapStateToProps(state) {
  return {
    value: valueSelector(state)
  }
}

export default connect(mapStateToProps)(TokenBalance);
