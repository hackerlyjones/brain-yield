import React, {Component} from "react";
import {connect} from 'react-redux';
import {valueSelector} from "./redux/selectors";
import Account from "./components/Account";
import Header from "./components/Header";
import WalletConnect from "./components/WalletConnect";

class App extends Component {
  render() {
    const {value} = this.props;

    return (
      <div className="container py-2">
        <Header />
        <WalletConnect />
        <Account />
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
    value: valueSelector(state)
  }
}

export default connect(mapStateToProps)(App);
